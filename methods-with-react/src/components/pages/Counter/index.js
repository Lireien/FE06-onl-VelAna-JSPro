import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../../../store/counter";

import Button from "./Button";

export function Counter() {
   const count = useSelector((state) => {
       return state.counter.value;
   });
  const dispatch = useDispatch();
  return (
    <div>
        <span>{count}</span>
      <Button title="Increment" onClick={() => dispatch(increment())} />
      <Button title="Decrement" onClick={() => dispatch(decrement())} />
      <Button
        title="Increment by 5"
        onClick={() => dispatch(incrementByAmount(5))}
      />
      <Button title="Reset" onClick={() => dispatch(reset())} />
    </div>
  );
}
