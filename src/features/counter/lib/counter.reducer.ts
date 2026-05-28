import type { CounterAction, CounterState } from "../types/counter.types";

export const initialCounterState: CounterState = {
  count: 0,
};

export function counterReducer(
  state: CounterState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    default:
      return state;
  }
}