import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  // 1. params
  // const {id, title, content} = useParams();

  // const match = useMatch("/home/message/detail/:id/:title/:content");
  // console.log("useMatch()", match);

  // 2. search
  // const [searchParams, setSearchParams] = useSearchParams();
  // const id = searchParams.get("id");
  // const title = searchParams.get("title");
  // const content = searchParams.get("content");

  // const location = useLocation();
  // console.log("useLocation()", location);

  // 3. state
  const { state: { id, title, content } } = useLocation();

  return (
    <ul>
      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li>
      {/* 2. search */}
      {/* <li>
        <button onClick={() => setSearchParams("id=008&title=message8&content=aha~~~")}>点我更新消息</button>
      </li> */}
    </ul>
  )
}
