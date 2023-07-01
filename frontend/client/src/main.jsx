import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Login } from "./components/Login.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"login",
    element:<Login/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
