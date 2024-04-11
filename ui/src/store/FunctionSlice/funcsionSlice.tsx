import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../index";

export interface initialStateInterface {
  edit: string | false | boolean;
}

const initialState: initialStateInterface = {
  edit: false,
};

const functionStore = createSlice({
  name: "function",
  initialState,
  reducers: {
    setEdit(state, action: PayloadAction<string | false | boolean>) {
      state.edit = action.payload;
    },
  },
});

export const { setEdit } = functionStore.actions;
export const selectEdit = (state: RootState) => state.functionStore.edit;
export default functionStore.reducer;
