import { useState } from "react";

import classes from "./NewPost.module.css";

export default function NewPost({ onCancel, onAddPost }) {
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
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleChangeContent} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleChangeAuthor} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}
