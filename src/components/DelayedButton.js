import React, { Component } from 'react'

export default class DelayedButton extends Component {

  handleDelay = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    },
     this.props.delay);
  }

  render() {
    return(
      <div>
      <button onClick = {this.handleDelay}>Delay button</button>
      </div>
    )
  }
}
