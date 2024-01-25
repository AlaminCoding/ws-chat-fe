import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Login from "./routes/login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
