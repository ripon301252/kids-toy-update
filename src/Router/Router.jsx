import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ToyDetails from "../pages/ToyDetails";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../pages/ResetPassword";
import AllItems from "../pages/AllItems";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Support from "../pages/Support";

export const router = createBrowserRouter([
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
        path: "/myProfile",
        element: <PrivateRoute>
          <MyProfile />
        </PrivateRoute>,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/forgotPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/allItems",
        element: <AllItems />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
