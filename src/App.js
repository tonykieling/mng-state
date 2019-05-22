import React from "react";
import ReactDOM from "react-dom";
import createPersistedState from "use-persisted-state";

// import Login from './components/Login.js'
import Counter from './components/Counter.js'

const Login = ({ login }) => {
  // console.log("App-login:", login)
  return login ? <h1>Hello, {login}</h1> : <h1>Not logged in</h1>;
};

// const Counter = ({ id }) => {
//   console.log("id: ", id)
//   const useCounterState = createPersistedState(id);
//   const [count, setCount] = useCounterState(0);
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <button onClick={() => setCount(count - 1)}>Minus</button>
//     </div>
//   );
// };

function App() {
  // Declare a new state variable, which we'll call "count"
  const useLoginState = createPersistedState("");
  const [login, setLogin] = useLoginState("");
  
  return (
    <div>
      <Counter id="id1" />
      <Counter id="id2" />
      <input type="text" onChange={event => setLogin(event.target.value)} />
      <Login login={login} />
    </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById("root"));

