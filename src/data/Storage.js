import createPersistedState from "use-persisted-state";
const useCounterState = createPersistedState('id');
const [count, setCount] = useCounterState(0);

// const Storage = initialCount => {
//   const [count, setCount] = useCounterState(0);
//   return {
//     count,
//     increment: () => setCount(currentCount => currentCount + 1)
//   }
// }
export default count;

// import createPersistedState from 'use-persisted-state';
// const useCounterState = createPersistedState('count');
// const useCounter = initialCount => {
//   const [count, setCount] = useCounterState(initialCount);
//   return {
//     count,
//     increment: () => setCount(currentCount => currentCount + 1),
//     decrement: () => setCount(currentCount => currentCount - 1),
//   };
// };

// export default useCounter;