import "pikaday/css/pikaday.css";
import "react-toastify/dist/ReactToastify.css";
/* eslint-disable react/no-deprecated */
import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // eslint-disable-next-line prettier/prettier
  document.getElementById("root")
);
