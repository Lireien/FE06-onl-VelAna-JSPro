import { createSlice } from "@reduxjs/toolkit";
import { COUNTERS_TYPES } from "../helpers/counters";

export const counter = createSlice({
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
    increment: (state, { payload = COUNTERS_TYPES}) => {
      const isError = payload === COUNTERS_TYPES.error;
      const isSuccess = payload === COUNTERS_TYPES.success;
      return {
        value: state.value + 1,
        error: isError ? state.error + 1 : state.error,
        success: isSuccess ? state.success + 1 : state.success,
      };
    },
    incrementByAmount: (state, { payload }) => {
      state.value += payload;
    },
    reset: (state) => {
      state.value = 0;
      state.error = 0;
      state.success  = 0;
    },
  },
});
export const { decrement, increment, incrementByAmount, reset } =
  counter.actions;

export default counter.reducer;
