import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Editor from "./Editor";

const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [],
    },
    {
      path: "/editor",
      element: <Editor />
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
};
export default Router;