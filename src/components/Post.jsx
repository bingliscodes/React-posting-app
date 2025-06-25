import classes from "./Post.module.css";

export default function Post({ author, content }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{content}</p>
    </li>
  );
}
