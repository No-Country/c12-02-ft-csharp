import App from "../App.jsx";
import { Login } from "../components/Login.jsx";

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  }
];

export default routes;
