import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="center-wrapper">
      <App />
    </div>
  </StrictMode>,
);
