import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "./index.css";
import App from "./App.jsx";

// @ts-ignore
const root = createRoot(document.getElementById("root"));
root.render(<App />);
