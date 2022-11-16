import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./config/routes";
import "./App.less";

export default function App() {
  // 使用路由表
  const elements = useRoutes(routes);

  return (
    <div>
      {elements}
    </div>
  );
}