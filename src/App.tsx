import React, { useState } from "react";
import Feed from "./components/Feed";
import { createPost, PostEntry } from "./model";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NewPost from "./components/NewPost";

export function dumpPosts(entries: PostEntry[]) {
  return JSON.stringify(entries);
}

export function loadPosts(json: string): PostEntry[] {
  const parsed: any[] = JSON.parse(json);
  for (const item of parsed) {
    item.createdAt = new Date(item.createdAt);
  }
  return parsed;
}

function App() {
  const [entries, setEntries] = useState(() => {
    let loaded = localStorage["entries"];
    if (loaded) {
      return loadPosts(loaded);
    }
    return [
      createPost({ content: "Hello world", createdAt: new Date() }),
      createPost({ content: "Another post", createdAt: new Date() }),
    ];
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/post"}
          element={
            <NewPost
              onAdd={(entry) => {
                setEntries([entry, ...entries]);
                localStorage["entries"] = dumpPosts([entry, ...entries]);
              }}
            />
          }
        />
        <Route path={"/"} element={<Feed entries={entries} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
