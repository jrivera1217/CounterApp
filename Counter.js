import React, { Component } from "react";
import './App.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementCount = () => {
    this.setState({
        count: this.state.count - 1,
    });
  };
  clearCount = () => {
    this.setState({count: this.state.count = 0});
  };
  render(){
    return(
        <div>
            <h1>Counter: {this.state.count}</h1>
            <button class="btns" onClick={this.incrementCount}>increment</button>
            <button class="btns" onClick={this.decrementCount}>decrement</button>
            <button class="btns" onClick={this.clearCount}>clear</button>
        </div>
    );
  };
}

export default Counter;
