import { useLoaderData, Link } from "react-router";

import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

export default function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.content}</p>
      </main>
    </Modal>
  );
}

export async function loader({ params }) {
  const res = await fetch(`http://localhost:8080/posts/${params.postId}`);
  const resData = await res.json();
  return resData.post;
}
