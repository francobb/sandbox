import { useState } from "preact/hooks";

/*
 Implement a useBoolean hook that manages a boolean state,
 with additional convenience utility methods.
*/
const useBoolean = () => {
  const [value, setValue] = useState(false);

  const setFalse = () => setValue(false);
  const setTrue = () => setValue(true);

  return {
    setFalse,
    setTrue,
    value
  }
}

export default useBoolean