import React from "react";
import {useDispatch} from "react-redux";
import {decrement, increment, incrementByAmount, reset,} from "../../../store/counter";

import Button from "./Button";

export function CounterPage() {

  const dispatch = useDispatch();
  return (
    <div>
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
