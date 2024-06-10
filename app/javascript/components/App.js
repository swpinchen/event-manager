import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Editor from "./Editor";

const App = () => (
  <>
    <Routes>
      <Route path="events/*" element={<Editor />} />
    </Routes>
    <ToastContainer />
  </>
);

export default App;
