import { combineReducers } from "redux";
import { counterReducer } from "store/counter.reducer";

const allReducers = {
  counters: counterReducer,
};

export const rootReducer = combineReducers(allReducers);
