export type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "set-step"; value: number };

export type CounterLastAction =
  | "idle"
  | "increment"
  | "decrement"
  | "reset"
  | "step-change";

export type CounterState = {
  count: number;
  step: number;
  lastAction: CounterLastAction;
  history: number[];
};