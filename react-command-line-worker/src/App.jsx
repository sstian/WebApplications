import React from "react";
import "./App.scss";
import MyGrid from "./components/MyGrid";

export default class App extends React.Component {
  render() {
    return (
      <div className="App full-screen-layout" >
        <header>Command Line Worker</header>
        <main><MyGrid /></main>
        <footer>Copyright © 2022 Tian All Rights Reserved</footer>
      </div>
    );
  }
}
