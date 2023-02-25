import React from "react";
import ReactDOM from "react-dom/client";
import AddInput from "./componetents/addInput/AddInput";
import "./index.scss";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="contanier">
      <AddInput />
    </div>
  </React.StrictMode>
);
