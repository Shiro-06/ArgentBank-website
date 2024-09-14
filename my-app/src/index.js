import React from "react";
import { createRoot } from "react-dom/client"; // Importer createRoot depuis "react-dom/client"
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import "./index.mini.css";

const root = createRoot(document.getElementById("root")); // Utiliser createRoot depuis "react-dom/client"
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);