import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

getStudentData = () => {
  console.log("getStudentData");
  // axios.get("http://localhost:3000/students")
  axios.get("/api1/students").then(
    response => console.log("students", response.data),
    error => console.log("error", error)
  );
}

  getCarData = () => {
    console.log("getCarData");
    // axios.get("http://localhost:3000/api2/cars")
    axios.get("/api2/cars").then(
      response => console.log("cars", response.data),
      error => console.log("error", error)
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击获取学生数据</button>
        <button onClick={this.getCarData}>点击获取汽车数据</button>
      </div>
    )
  }
}



