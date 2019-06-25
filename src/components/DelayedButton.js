// Code DelayedButton Component Here
import React, { Compentency } from 'react'

class DelayedButton extends React.Component {

  handleEvent = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay)
  }
  render() {
    return(
      <button onClick={this.handleEvent}>Delayed</button>
    )
  }
}

export default DelayedButton;