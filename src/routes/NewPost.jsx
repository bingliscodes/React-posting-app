import { useState } from "react";
import { Link } from "react-router";

import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

export default function NewPost({ onAddPost }) {
  const [enteredContent, setEnteredContent] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function handleChangeContent(e) {
    setEnteredContent(e.target.value);
  }

  function handleChangeAuthor(e) {
    setEnteredAuthor(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      content: enteredContent,
      author: enteredAuthor,
    };
    onAddPost(postData);
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={handleChangeContent}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={handleChangeAuthor} />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}
