import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";

export default function PostList({
  isPosting,
  handleHideModal,
  handleShowModal,
}) {
  const [enteredContent, setEnteredContent] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function handleChangeContent(e) {
    setEnteredContent(e.target.value);
  }

  function handleChangeAuthor(e) {
    setEnteredAuthor(e.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={handleHideModal}>
          <NewPost
            onContentChange={handleChangeContent}
            onAuthorChange={handleChangeAuthor}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} content={enteredContent} />
        <Post author="Cannoli" content="Mreowwww" />
      </ul>
    </>
  );
}
