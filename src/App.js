import React from "react";
import Home from "./components/Home";
import CodeEditor from "./components/CodeEditor";
import MarkdownEditor from "./components/MarkdownEditor";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/markdown-editor" element={<MarkdownEditor />} />
      </Routes>
    </>
  );
}

export default App;
