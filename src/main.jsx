import React, { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import Users from './Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
