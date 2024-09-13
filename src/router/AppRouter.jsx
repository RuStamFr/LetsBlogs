import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SinglePost from "../Pages/SinglePost/SinglePost";
import Category from "../Pages/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "single-post/:id",
        element: <SinglePost />,
      },
      {
        path: "category/:categoryId",
        element: <Category />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
