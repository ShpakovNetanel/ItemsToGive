import { createHashRouter } from "react-router-dom";
import LandPage from "./views/LandPage/LandPage";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import ItemsPage from "./views/ItemsPage/ItemsPage";

export enum Routes {
  LAND_PAGE = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  ITEMS_TO_GIVE = '/itemsToGive'
}

const router = createHashRouter([
  {
    path: Routes.LAND_PAGE,
    element: <LandPage />,
    index: true,
  },
  {
    path: Routes.LOGIN,
    element: <Login />,
  },
  {
    path: Routes.REGISTER,
    element: <Register />,
  },
  {
    path: Routes.ITEMS_TO_GIVE,
    element: <ItemsPage />
  }
]);

export default router;
