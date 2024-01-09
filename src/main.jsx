import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Dashboard from "./components/Dashboard.jsx";
// import Form from "./components/Form.jsx";
// import Navbar from "./components/Navbar.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />,
//     children: [
//       {
//         path: "/",
//         element: <Form />,
//       },
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
