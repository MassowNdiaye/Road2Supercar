import React from "react";
import ReactDOM from "react-dom/client";
import "../dist/navbar.css";

const root = document.getElementById("navbar-root");
if (root) ReactDOM.createRoot(root).render(<Navbar />);
