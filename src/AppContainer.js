/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './App'

class AppContainer extends Component {
  state = { count: 0, lastClicked: '' }

  addOne = () => {
    const nextCount = this.state.count + 1
    this.setState({ count: nextCount, lastClicked: 'Add One' })
  }

  substractOne = () => {
    const nextCount = this.state.count - 1
    this.setState({ count: nextCount, lastClicked: 'Substract One' })
  }

  reset = () => {
    this.setState({ count: 0, lastClicked: 'Reset' })
  }

  render() {
    return (
      <App
        addOne={this.addOne}
        substractOne={this.substractOne}
        reset={this.reset}
        count={this.state.count}
        lastClicked={this.state.lastClicked}
      />
    )
  }
}

export default AppContainer
