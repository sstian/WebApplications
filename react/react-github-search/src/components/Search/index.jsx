import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Search extends Component {
  search = () => {
    // 连续解构赋值并重命名
    const { keyWordElement: { value: keyWord } } = this;

    // 发送网络请求前通知List更新状态
    PubSub.publish("snowflake", { isFirst: false, isLoading: true });
    // 发送网络请求
    axios.get(`/github-api/search/users?q=${keyWord}`).then(
      response => {
        // 请求成功后通知List更新状态
        PubSub.publish("snowflake", { isLoading: false, users: response.data.items });
      },
      error => {
        // 请求失败后通知List更新状态
        PubSub.publish("snowflake", { isLoading: false, err: error.message });
      }
    );
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关健词点击搜索" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>

    );
  }
}
