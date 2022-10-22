import React, { Component } from 'react'
import store from '../../redux/store';
import { increment, decrement, incrementAsync } from '../../redux/actions/count';

export default class Count extends Component {
  // state = { count: 0 };
  state = { carName: "奔驰C63" };

  increment = () => {
    // const { count } = this.state;
    const { value } = this.selectNumber;
    // this.setState({ count: count + value * 1 });
    store.dispatch(increment(value * 1));
  }
  decrement = () => {
    // const { count } = this.state;
    const { value } = this.selectNumber;
    // this.setState({ count: count - value * 1 });
    store.dispatch(decrement(value * 1));
  }
  incrementIfOdd = () => {
    // const { count } = this.state;
    const count = store.getState();
    const { value } = this.selectNumber;
    if (count % 2 !== 0) {
      // this.setState({ count: count + value * 1 });
      store.dispatch(increment(value * 1));
    }
  }
  decrementAsync = () => {
    // const { count } = this.state;
    const { value } = this.selectNumber;
    // window.setTimeout(() => this.setState({ count: count + value * 1 }), 500);
    store.dispatch(incrementAsync(value * 1, 500));
  }

  render() {
    return (
      <div>
        {/* <h1>当前求和为：{this.state.count}</h1> */}
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.decrementAsync}>异步加</button>
      </div>
    )
  }
}
