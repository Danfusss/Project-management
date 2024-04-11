import { createSlice } from "@reduxjs/toolkit";

import { CardConfig } from "models/interfaces/cardConfig";
import { RootState } from "../index";

import jsonData from "../../mock/Project.json";

const DATA: Array<CardConfig> = jsonData as Array<CardConfig>;
interface initialStateInterface {
  listOfProjects: Array<CardConfig>;
}

const initialState: initialStateInterface = {
  listOfProjects: DATA,
};

const filterDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const selectData = (state: RootState) => state.filterData.listOfProjects;

export default filterDataSlice.reducer;
