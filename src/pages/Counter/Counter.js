import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from 'reduxs/actions/counterActions'

class Counter extends Component {
  componentWillMount() {
    console.log('xxxxxxxxxxxxx');
    console.log(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.counter.count !== this.props.counter.count) {
      console.log('componentwillreceiveprops');
      console.log(nextProps.counter.count);
    }
  }
  render() {
    return (
      <div>
        <div>当前计数为{this.props.counter.count}</div>
        <button onClick={() => this.props.actions.increment()}>自增
        </button>
        <button onClick={() => this.props.actions.decrement()}>自减
        </button>
        <button onClick={() => this.props.actions.reset()}>重置
        </button>
      </div>
    )
  }
}

export default connect(
  state => ({
    counter: state.counterReducer,
  }),
  dispatch => ({
    actions: bindActionCreators(counterActions, dispatch),
  })
)(Counter);