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

      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post
            key={post.content}
            content={post.content}
            author={post.author}
          />
        ))}
      </ul>
    </>
  );
}
