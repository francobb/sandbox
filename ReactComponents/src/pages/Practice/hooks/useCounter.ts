import { useState } from "preact/hooks";

/*
  Implement a useCounter hook that manages a counter state,
  with some additional convenience utility methods.
*/
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount
  }
}

export default useCounter;