import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout";
import Home from "~/pages/home";
import BadgesAPI from "~/pages/badges/api";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "badges-api",
        element: <BadgesAPI />,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);

export default routes;
