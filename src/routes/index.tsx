import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login/Login";
import About from "../page/About/About";
import NotFound from "../page/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
 
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
