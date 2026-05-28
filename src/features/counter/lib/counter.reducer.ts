import {
    DEFAULT_COUNT,
    DEFAULT_STEP,
    MAX_COUNT,
    MAX_STEP,
    MIN_COUNT,
    MIN_STEP,
  } from "./counter.constants";
  import { addToHistory, clamp } from "./counter.utils";
  import type { CounterAction, CounterState } from "../types/counter.types";
  
  export const initialCounterState: CounterState = {
    count: DEFAULT_COUNT,
    step: DEFAULT_STEP,
    lastAction: "idle",
    history: [DEFAULT_COUNT],
  };
  
  export function counterReducer(
    state: CounterState,
    action: CounterAction
  ): CounterState {
    switch (action.type) {
      case "increment": {
        const nextCount = clamp(state.count + state.step, MIN_COUNT, MAX_COUNT);
  
        if (nextCount === state.count) {
          return state;
        }
  
        return {
          ...state,
          count: nextCount,
          lastAction: "increment",
          history: addToHistory(state.history, nextCount),
        };
      }
  
      case "decrement": {
        const nextCount = clamp(state.count - state.step, MIN_COUNT, MAX_COUNT);
  
        if (nextCount === state.count) {
          return state;
        }
  
        return {
          ...state,
          count: nextCount,
          lastAction: "decrement",
          history: addToHistory(state.history, nextCount),
        };
      }
  
      case "reset": {
        if (state.count === DEFAULT_COUNT) {
          return state;
        }
  
        return {
          ...state,
          count: DEFAULT_COUNT,
          lastAction: "reset",
          history: addToHistory(state.history, DEFAULT_COUNT),
        };
      }
  
      case "set-step": {
        const safeStep = clamp(action.value, MIN_STEP, MAX_STEP);
  
        return {
          ...state,
          step: safeStep,
          lastAction: "step-change",
        };
      }
  
      default: {
        return state;
      }
    }
  }