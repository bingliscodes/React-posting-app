import { useLoaderData } from "react-router";

import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              content={post.content}
              author={post.author}
            />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet. </h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
