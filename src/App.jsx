import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleShowModal() {
    setModalIsVisible(true);
  }

  function handleHideModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={handleShowModal} />
      <main>
        <PostList
          isPosting={modalIsVisible}
          handleHideModal={handleHideModal}
        />
      </main>
    </>
  );
}

export default App;
