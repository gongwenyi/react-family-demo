import React, { Component } from 'react';

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }
  _handleClick() {
    this.setState({
      count: ++this.state.count,
    });
  }
  render() {
    return (
      <div>
        <div>hello, home</div>
        <div>当前计数：{this.state.count}</div>
        <button onClick={() => this._handleClick()}>自增</button>
      </div>
    )
  }
}