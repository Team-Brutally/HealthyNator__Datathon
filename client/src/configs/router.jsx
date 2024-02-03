import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout/Layout";
// import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MyAppointments from "../pages/MyAppointments";
// import Login from "../pages/Login";
import UserHome from "../pages/UserHome";
import HealthAI from "../pages/HealthAI";
import UserProfile from "../pages/UserProfile";
import BookDoctor from "../pages/BookDoctor";

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
    path: "/sign",
    element: <UserHome />,
  },
  {
    path: "/ai",
    element: <HealthAI />,
  },
  {
    path: "/myappointments",
    element: <MyAppointments />,
  },
  {
    path: "/home",
    element: <UserProfile />,
  },
  {
    path: "/bookdoc",
    element: <BookDoctor />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default router;
