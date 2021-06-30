import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import list from "./list";

export default configureStore({
  reducer: { counter, list },
});
