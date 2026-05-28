export type CounterAction = {
    type: "increment";
  };
  
  export type CounterState = {
    count: number;
  };
  
  export type CounterToast = {
    id: number;
    count: number;
  };