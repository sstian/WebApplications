import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
  state = {
    messages: [
      { id: 1, title: "message1" },
      { id: 2, title: "message2" },
      { id: 3, title: "message3" },
    ]
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map(message => {
            return (
              <li key={message.id}>
                {/* 传递 params 参数 */}
                {/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link> */}
                {/* 传递 search 参数 */}
                {/* <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}
                {/* 传递 state 参数 */}
                <Link to={{pathname: "/home/message/detail", state: {id: message.id, title: message.title}}}>{message.title}</Link>
              </li>
            )
          })}
        </ul>
        <hr />
        {/* 注册路由，声明接收 params 参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
        {/* 注册路由，无需声明接收 search 参数，注册路由 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* 注册路由，无需声明接收 state 参数 */}
        <Route path="/home/message/detail" component={Detail} />
      </div>
    );
  }
}


