import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster } from "sonner";
import AnimePlus from "../admin/Admin/animeqoshish/AnimePlus";
import Dashboard from "../admin/Admin/Dashboard/Dashboard";
import AdminLayout from "../admin/AdminLayout/AdminLayout";

import Episode from "../admin/Admin/AnimeEpisode/Episode";
import AdminPost from "../admin/Admin/post/AdminPost";
import AdminStatus from "../admin/Admin/Status/AdminStatus";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login/Login";
import Luciy from "./pages/luc/Luciy";
import Me from "./pages/Me/Me";
import Top from "./pages/top/Top";
import Search from "./pages/Search/Search";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "top",
        element: <Top />,
      },
      {
        path: "random",
        element: <Luciy />,
      },
      {
        path: "me",
        element: <Me />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "addanime",
        element: <AnimePlus />,
      },
      {
        path: "status",
        element: <AdminStatus />,
      },
      {
        path: "post",
        element: <AdminPost />,
      },
      {
        path: "episode",
        element: <Episode />,
      },
    ],
  },
]);

const App = () => {
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
