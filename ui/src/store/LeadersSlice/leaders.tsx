import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../index";

import { Tasks } from "models/interfaces/createLeaders";

export interface initialStateInterface {
  name: string;
  startDate: Date | null;
  endDate: Date | null;
  post: string;
  tasks: Array<Tasks>;
}

const initialState: initialStateInterface = {
  name: "",
  startDate: null,
  endDate: null,
  post: "",
  tasks: [],
};

const Leaders = createSlice({
  name: "leaders",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setStartDate(state, action: PayloadAction<Date | null>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<Date | null>) {
      state.endDate = action.payload;
    },
    setPost(state, action: PayloadAction<string>) {
      state.post = action.payload;
    },
  },
});

export const { setName, setStartDate, setEndDate, setPost } = Leaders.actions;
export const selectName = (state: RootState) => state.leadersChange.name;
export const selectStartDate = (state: RootState) =>
  state.leadersChange.startDate;
export const selectEndDate = (state: RootState) => state.leadersChange.endDate;
export const selectPost = (state: RootState) => state.filters.projectClient;

export default Leaders.reducer;
