import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRoute from "./Compnents/Routes/MainRoute.jsx";
import AuthProvider from "./Compnents/Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <MainRoute></MainRoute>
    </AuthProvider>
  </React.StrictMode>
);
