import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    error: 0,
    success: 0,
  },
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, { payload }) => {
      state.value += payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const { decrement, increment, incrementByAmount, reset } =
  counter.actions;

export default counter.reducer;
