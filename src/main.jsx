import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import AllBooks from "./components/AllBooks/AllBooks.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Register from "./components/Register/Register.jsx";
import AddBooks from "./components/AddBooks/AddBooks.jsx";
import MyBooks from "./components/MyBooks/MyBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allBooks",
        Component: AllBooks,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "addBooks",
        element: <AddBooks></AddBooks>,
      },
      {
        path: "myBooks",
        element: <MyBooks></MyBooks>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
