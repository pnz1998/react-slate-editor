import { FC } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Editor from "./Editor";
import PrivateSpace from "./PrivateSpace";

const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Navigate to="/private" replace/>
    },
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "private",
          element: <PrivateSpace />
        }
      ],
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