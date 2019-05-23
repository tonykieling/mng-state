import React from "react";
import createPersistedState from "use-persisted-state";

export default function Counter({ id }) {
  const useCounterState = createPersistedState(id);
  const [count, setCount] = useCounterState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
    </div>
  );
};