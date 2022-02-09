import React, { useState } from "react";
import Feed from "./components/Feed";
import { createPost } from "./model";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NewPost from "./components/NewPost";

function App() {
  const [entries, setEntries] = useState([
    createPost({ content: "Hello world", createdAt: new Date() }),
    createPost({ content: "Another post", createdAt: new Date() }),
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/post"}
          element={
            <NewPost onAdd={(entry) => setEntries([entry, ...entries])} />
          }
        />
        <Route path={"/"} element={<Feed entries={entries} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
