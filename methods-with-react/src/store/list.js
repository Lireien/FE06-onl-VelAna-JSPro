import { createSlice } from "@reduxjs/toolkit";
import { LIST_TYPES } from "../const";
import { changeItemTypeByName } from "../helpers";

export const list = createSlice({
  name: "list",
  initialState: Object.getOwnPropertyNames(Array.prototype).map((m) => ({
    name: m,
    type: LIST_TYPES.MAIN,
  })),
  reducers: {
    changeType: (state, { payload }) => {
      if (!payload) return state;
      const { name, type } = payload;
      return changeItemTypeByName(state, name, type);
    },
  },
});
export const { changeType } = list.actions;

export default list.reducer;
