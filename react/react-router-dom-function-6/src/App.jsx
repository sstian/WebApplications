import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  // 使用路由表
  const elements = useRoutes(routes);

  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <h2>React Router 6</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className="list-group-item" to="/about">About</NavLink>
            <NavLink className="list-group-item" to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/" element={<Navigate to="/home" />} />
                </Routes> */}
              {elements}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
