/* eslint-disable react/no-deprecated */
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
    // eslint-disable-next-line prettier/prettier
    document.getElementById("root")
  );
});
