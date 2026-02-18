import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.jsx";

const container = document.getElementById("navbar-root");

if (container) {
  createRoot(container).render(<Navbar />);
}
