import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import "./index.css";

export default class List extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ""
  };

  componentDidMount() {
    // 消息订阅
    this.token = PubSub.subscribe("snowflake", (_, stateObj) => this.setState(stateObj));
  }

  componentWillUnmount() {
    // 取消消息订阅
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;

    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字，然后点击搜素</h2> :
            isLoading ? <h2>Loading...</h2> :
              err ? <h2 style={{ color: "red" }}>{err.message}</h2> :
                users.map((userObj) => {
                  return (
                    <div className="card" key={userObj.id}>
                      <a rel="noreferrer" href={userObj.html_url} target="_blank">
                        <img alt="portrait" src={userObj.avatar_url} style={{ width: '180px' }} />
                      </a>
                      <p className="card-text">{userObj.login}</p>
                    </div>)
                })
        }
      </div>
    );
  }
}


