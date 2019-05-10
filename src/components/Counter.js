import React from 'react'
// import createPersistedState from "use-persisted-state";
import Storage from '../data/Storage.js'

export default function Counter(props) {
  console.log("Counter-id: ", props.id)
  console.log("Counter-Storage: ", Storage.count)
  // const useCounterState = createPersistedState(props.id);
  // const [count, setCount] = useCounterState(0);
  return (
    <div>
      <p>You clicked {Storage.count} times</p>
      <button onClick={() => Storage.setCount(Storage.count + 1)}>Click me</button>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}
