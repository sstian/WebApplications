import React, { Component } from 'react';
import "./index.css";

export default class Item extends Component {
  state = { mouse: false };

  handleMouse = (flag) => {
    this.setState({ mouse: flag });
  }

  handleCheck = (id, event) => {
    this.props.updateTodo(id, event.target.checked);
  }

  handleDelete = (id) => {
    if (window.confirm("你确定删除吗？")) {
      this.props.deleteTodo(id);
    }
  }

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={() => this.handleMouse(true)}
        onMouseLeave={() => this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={(event) => this.handleCheck(id, event)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? "block" : "none" }} 
        onClick={() => this.handleDelete(id)}>删除</button>
      </li>
    )
  }
}
