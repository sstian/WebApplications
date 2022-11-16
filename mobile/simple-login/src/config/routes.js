import UserLogin from "../pages/UserLogin";
import UserCenter from "../pages/UserCenter";

const routes = [
  {
    path: "/login",
    element: <UserLogin />
  },
  {
    path: "/center",
    element: <UserCenter />
  }
];

export default routes;
