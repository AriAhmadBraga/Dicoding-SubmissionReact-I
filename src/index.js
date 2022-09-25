import React from "react";
import { createRoot } from "react-dom/client";
import PrivateNote from "./components/PrivateNote";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<PrivateNote />);
