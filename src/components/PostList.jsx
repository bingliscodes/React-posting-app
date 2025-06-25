import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";

export default function PostList({ isPosting, handleHideModal }) {
  const [posts, setPosts] = useState([]);

  function handleAddPost(postData) {
    setPosts((prevPosts) => [postData, ...prevPosts]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={handleHideModal}>
          <NewPost onCancel={handleHideModal} onAddPost={handleAddPost} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.content}
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
