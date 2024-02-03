import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout/Layout";
// import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MyAppointments from "../pages/MyAppointments";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/myappointments",
    element: <MyAppointments />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
