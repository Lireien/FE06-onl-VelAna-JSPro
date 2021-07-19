import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import list from "./list";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = configureStore({
  reducer: { counter, list },
  middleware: [thunk, logger],
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store;