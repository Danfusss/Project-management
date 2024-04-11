import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../index";

import { CreateLeaders } from "../../models/interfaces/createLeaders";

import jsonData from "../../mock/leaders.json";

const DATA: Array<CreateLeaders> = jsonData as Array<CreateLeaders>;

interface initialStateInterface {
  leaders: Array<CreateLeaders>;
}

const initialState: initialStateInterface = {
  leaders: DATA,
};

const filterLeadersSlice = createSlice({
  name: "leadersData",
  initialState,
  reducers: {},
});

export const leadersData = (state: RootState) => state.leaders;
export default filterLeadersSlice.reducer;
