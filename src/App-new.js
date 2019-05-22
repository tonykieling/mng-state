import ReactDOM from "react-dom";

import Counter from './components/Counter.js'


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter id="id1" />
        <Counter id="id2" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));