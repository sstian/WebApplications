import React, { Component } from "react";
// 用于连接UI组件和redux
import { connect } from "react-redux";
// 引入 action
import { increment, decrement, incrementAsync } from "../../redux/actions/count";

// 整合UI组件和容器组件
class Count extends Component {
  state = { carName: "奔驰C63" };

  increment = () => {
    const { value } = this.selectNumber;
    // store.dispatch(increment(value * 1));
    this.props.increment(value * 1);
  }
  decrement = () => {
    const { value } = this.selectNumber;
    // store.dispatch(decrement(value * 1));
    this.props.decrement(value * 1);
  }
  incrementIfOdd = () => {
    // const count = store.getState();
    const count = this.props.count;
    const { value } = this.selectNumber;
    if (count % 2 !== 0) {
      // store.dispatch(increment(value * 1));
      this.props.increment(value * 1);
    }
  }
  decrementAsync = () => {
    const { value } = this.selectNumber;
    // store.dispatch(incrementAsync(value * 1, 500));
    this.props.incrementAsync(value * 1, 500);
  }

  render() {
    return (
      <div>
        <h2>我是Count组件, 下方组件总人数为: {this.props.personCount}</h2>
        <h4>当前求和为：{this.props.count}</h4>
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

// 使用connect()()创建并暴露UI组件Count的容器组件
// 在UI组件中，通过 this.props.xxx 访问
export default connect(
  // mapStateToProps - 获取状态
  state => ({
    count: state.count,
    personCount: state.persons.length
  }),
  // mapDispatchToProps - 更新状态
  // 1. 一般写法：{prop: dispatch_callback}
  // dispatch => ({
  //   increment: number => dispatch(increment(number)),
  //   decrement: number => dispatch(decrement(number)),
  //   incrementAsync: (number, time) => dispatch(incrementAsync(number, time))
  // })

  // 2. 简写形式：{prop: action} + 对象简写形式；react-redux会自动dispatch(action)
  { increment, decrement, incrementAsync }
)(Count);