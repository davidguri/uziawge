import ReactDOM from "react-dom/client";
import "./main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import ComingSoon from "./ComingSoon";

import Root from "./routes/Root";
import Music from "./routes/Music";
import Promotions from "./routes/Promotions";
import NewRelease from "./routes/NewRelease";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/music",
    element: <Music />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/promotions",
    element: <Promotions />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/merch",
    element: <ComingSoon />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new_release",
    element: <NewRelease />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
