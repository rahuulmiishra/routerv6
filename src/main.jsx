import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import history from "./routes/history";

import { getHistory } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Child />
      <App />
    </div>
  </React.StrictMode>
);

function Child() {
  return (
    <button
      onClick={() => {
        console.log("redirect");
        const his = getHistory();
        his.navigate("/list");
      }}
    >
      Go To Home - I am outside router
    </button>
  );
}
