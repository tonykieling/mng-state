import createPersistedState from "use-persisted-state";
// const useCounterState = createPersistedState('id');
// const [count, setCount] = useCounterState(0);

// const Storage = initialCount => {
//   const [count, setCount] = useCounterState(0);
//   return {
//     count,
//     increment: () => setCount(currentCount => currentCount + 1)
//   }
// }
// export default count;

// import React from "react";
// import ReactDOM from "react-dom";
// import createPersistedState from "use-persisted-state";

increment = (id) => {
  // dsa
}

export default Storage = ({ id }) => {
  // console.log("id: ", id)
  const useCounterState = createPersistedState(id);
  const [count, setCount] = useCounterState(0);
  return {
    count,
    increment: () => setCount(currentCount => currentCount + 1),
    decrement: () => setCount(currentCount => currentCount - 1),
  };
};