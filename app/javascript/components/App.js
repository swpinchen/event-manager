import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer } from "react-toastify";
import Editor from "./Editor";

const App = () => (
  <>
    <ToastContainer position="top-right" />
    <Routes>
      <Route path="events/*" element={<Editor />} />
    </Routes>
  </>
);

export default App;
