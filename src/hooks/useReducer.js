import { useState } from "react";

function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);
  function dispatch(action) {
    const newState = reducer(state, action);
    setState(newState);
  }
  return [state, dispatch];
}

export { useReducer };
