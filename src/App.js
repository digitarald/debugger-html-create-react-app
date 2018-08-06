import React, { Component } from "react";
import Game from "./Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <article>
        <Game />
        <footer>
          <a href="https://reactjs.org/tutorial/tutorial.html">
            React's Tutorial
          </a>{" "}
          example app on top of{" "}
          <a href="https://github.com/facebook/create-react-app/">
            create-react-app
          </a>.
        </footer>
      </article>
    );
  }
}

export default App;
