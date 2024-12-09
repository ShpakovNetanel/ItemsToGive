import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import LandPage from "./views/LandPage/LandPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandPage />,
    index: true,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
