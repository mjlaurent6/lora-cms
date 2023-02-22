import { createBrowserRouter } from "react-router-dom";
import Content from "../components/contents/Content";
import Control from "../components/contents/Control";
import Paperbase from "../components/Paperbase";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Paperbase />,
    children: [
      {
        path: "content",
        element: <Content />,
      },
      {
        path: "control",
        element: <Control />,
        children: [
          {
            path: "content",
            element: <Content />,
          },
        ],
      },
    ],
  },
]);

export default router;
