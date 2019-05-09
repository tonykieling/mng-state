import React from 'react'
import createPersistedState from "use-persisted-state";

export default function Counter(props) {
  console.log("id: ", props.id)
  const useCounterState = createPersistedState(props.id);
  const [count, setCount] = useCounterState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
