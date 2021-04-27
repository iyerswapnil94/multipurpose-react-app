import { IStoreAction } from "./action.model";

export interface ICountReducerState {
  count: number;
}

const initialState: ICountReducerState = {
  count: 0,
};

export const counterReducer = (
  state: ICountReducerState = initialState,
  action: IStoreAction
): ICountReducerState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
