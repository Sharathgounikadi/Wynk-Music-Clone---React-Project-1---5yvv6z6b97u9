import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import App from "./App.jsx";
import {UserProvider} from "./utils/UserProvider.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
      <App />
    </UserProvider>
);
