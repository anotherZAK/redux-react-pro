import React from "react";
import Postform from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPost from "./components/FetchedPosts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <Postform />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts/>
        </div>
        <div className="col">
        <h2>Асинхронные посты</h2>
          <FetchedPost posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
