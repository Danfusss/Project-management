import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../index";

export interface initialStateInterface {
  number: string;
  enteredProjectEndDate: Date | null;
  projectLocation: string[];
  projectStatus: string[];
  projectClient: string[];
  projectStartData: string | null;
  projectEndData: string | null;
  projectInput: string;
}

const initialState: initialStateInterface = {
  number: "",
  enteredProjectEndDate: null,
  projectLocation: [],
  projectClient: [],
  projectStatus: [],
  projectStartData: null,
  projectEndData: null,
  projectInput: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setNumber(state, action: PayloadAction<string>) {
      state.number = action.payload;
    },
    setDate(state, action: PayloadAction<Date | null>) {
      state.enteredProjectEndDate = action.payload;
    },
    setLocation(state, action: PayloadAction<string[]>) {
      state.projectLocation = action.payload;
    },
    setStatus(state, action: PayloadAction<string[]>) {
      state.projectStatus = action.payload;
    },
    setClient(state, action: PayloadAction<string[]>) {
      state.projectClient = action.payload;
    },
    setStartData(state, action: PayloadAction<string | null>) {
      state.projectStartData = action.payload;
    },
    setEndData(state, action: PayloadAction<string | null>) {
      state.projectEndData = action.payload;
    },
    setInput(state, action: PayloadAction<string>) {
      state.projectInput = action.payload;
    },
  },
});

export const {
  setNumber,
  setDate,
  setLocation,
  setStatus,
  setClient,
  setEndData,
  setStartData,
  setInput,
} = filterSlice.actions;
export const selectNumber = (state: RootState) => state.filters.number;
export const selectLocation = (state: RootState) =>
  state.filters.projectLocation;
export const selectStatus = (state: RootState) => state.filters.projectStatus;
export const selectClient = (state: RootState) => state.filters.projectClient;
export const selectStartData = (state: RootState) =>
  state.filters.projectStartData;
export const selectEndData = (state: RootState) => state.filters.projectEndData;
export const selectInput = (state: RootState) => state.filters.projectInput;
export default filterSlice.reducer;
