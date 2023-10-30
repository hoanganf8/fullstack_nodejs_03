import React, { Component } from "react";
import Counter from "./components/Counter";
import Login from "./components/Login";

export default class App extends Component {
  constructor() {
    super();
    this.state = { isShow: false, todo: [] };
    // this.getTodo();
  }
  getTodo = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    this.setState({ todo: data });
  };
  componentDidMount() {
    this.getTodo();
  }
  render() {
    const { todo } = this.state;

    return (
      <div>
        <Login />
        {/* {this.state.isShow && <Counter />}
        <button
          onClick={() => {
            this.setState({
              isShow: !this.state.isShow,
            });
          }}
        >
          Toggle
        </button>
        {todo.map(({ id, title }) => (
          <h3 key={id}>{title}</h3>
        ))} */}
      </div>
    );
  }
}

/*
Call API -> Render UI
*/
