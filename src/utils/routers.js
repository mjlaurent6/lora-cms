import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Content from "../components/contents/Content";
import Control from "../components/contents/Control";
import Status from "../components/contents/controls/Status";
import Paperbase from "../components/Paperbase";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const router = createHashRouter([
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
            path: "status",
            element: <Status />,
          },
        ],
      },
    ],
  },
]);

export default router;
