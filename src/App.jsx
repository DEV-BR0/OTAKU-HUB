import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster } from "sonner";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login/Login";
import Top from "./pages/top/Top"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "top",
        element:<Top/>
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  console.log("salome");

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          className:
            "!bg-white/10 !backdrop-blur-xl !border !border-white/20 !text-white !shadow-lg",
        }}
      />

      <RouterProvider router={router} />
    </>
  );
};

export default App;
