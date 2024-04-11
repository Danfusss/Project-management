import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "./FilterSlice/todoSlice";
import filterData from "./FilterSlice/dataSlice";
import leadersData from "./LeadersSlice/dataLeadersSlice";
import leadersChange from "./LeadersSlice/leaders";
import functionStore from "./FunctionSlice/funcsionSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    filterData: filterData,
    leaders: leadersData,
    leadersChange: leadersChange,
    functionStore: functionStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
