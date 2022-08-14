import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";

const routes = [
  {
    path: "/",
    element: <Navigate to="home" />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "news",
        element: <News />
      },
      {
        path: "message",
        element: <Message />,
        children: [
          {
            // 1. params
            // path: "detail/:id/:title/:content",

            // 2. search
            // path: "detail",

            // 3. state
            path: "detail",
            
            element: <Detail />
          }
        ]
      }
    ]
  },
];

export default routes;