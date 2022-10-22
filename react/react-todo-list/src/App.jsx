import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
  // 初始化状态
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "写代码", done: false },
    ]
  }

  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  }

  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map(todo => (todo.id === id) ? { ...todo, done } : todo);
    this.setState({ todos: newTodos });
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map(todo => ({...todo, done}));
    this.setState({ todos: newTodos });
  }

  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => !todo.done);
    this.setState({ todos: newTodos });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    );
  }

}

