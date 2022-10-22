import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
  const [messages] = useState([
    { id: 1, title: "message1", content: "待到秋来九月八" },
    { id: 2, title: "message2", content: "我花开后百花杀" },
    { id: 3, title: "message3", content: "冲天香阵透长安" },
    { id: 4, title: "message4", content: "满城尽带黄金甲" }
  ])
  return (
    <div>
      <ul>
        {messages.map(message => {
          return <li key={message.id}>
            {/* 1. params */}
            {/* <Link to={`detail/${message.id}/${message.title}/${message.content}`}>{message.title}</Link> */}

            {/* 2. search */}
            {/* <Link to={`detail?id=${message.id}&title=${message.title}&content=${message.content}`}>{message.title}</Link> */}

            {/* 3. state */}
            <Link to="detail" state={{...message}}>{message.title}</Link>
          </li>
        })}
      </ul>
      <hr />
      {/* 指定路由组件呈现的位置 */}
      <Outlet />
    </div>
  )
}
