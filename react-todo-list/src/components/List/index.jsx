import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import "./index.css";

export default class List extends Component {
  static proTypes = {
    todos: PropTypes.array,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map(todo => <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)}
      </ul>

    )
  }
}
