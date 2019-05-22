import React from "react";
import ReactDOM from "react-dom";

import Login from './components/Login.js'
import Counter from './components/Counter.js'

function App() {  
  return (
    <div>
      <Counter id="id1" />
      <Counter id="id2" />
      <Login />
    </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById("root"));

