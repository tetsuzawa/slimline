import React from "react";
import App from "./src/App";
import { render } from "react-dom";
import { initEnv } from "./env";

initEnv();

render(
  <div>
    <App />
  </div>,
  document.getElementById("root")!
);
