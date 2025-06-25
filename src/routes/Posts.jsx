import { Outlet } from "react-router";

import PostList from "../components/PostList";

export default function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export async function loader() {
  const res = await fetch("http://localhost:8080/posts");
  const resData = await res.json();
  return resData.posts;
}
