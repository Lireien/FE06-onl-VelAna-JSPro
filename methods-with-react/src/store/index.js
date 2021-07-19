import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import list from "./list";
import thunk from "redux-thunk";
import logger from "redux-logger";

export default configureStore({
  reducer: { counter, list },
  middleware: [thunk, logger],
});

