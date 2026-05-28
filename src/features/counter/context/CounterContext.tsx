import {
    createContext,
    useCallback,
    useMemo,
    useReducer,
    useState,
    type ReactNode,
  } from "react";
  import {
    counterReducer,
    initialCounterState,
  } from "../lib/counter.reducer";
  import type { CounterToast } from "../types/counter.types";
  
  type CounterContextValue = {
    count: number;
    increment: () => void;
    latestToast: CounterToast | null;
    dismissToast: () => void;
  };
  
  export const CounterContext = createContext<CounterContextValue | null>(null);
  
  type CounterProviderProps = {
    children: ReactNode;
  };
  
  export function CounterProvider({ children }: CounterProviderProps) {
    const [state, dispatch] = useReducer(counterReducer, initialCounterState);
    const [latestToast, setLatestToast] = useState<CounterToast | null>(null);
  
    const increment = useCallback(() => {
      const nextCount = state.count + 1;
  
      dispatch({ type: "increment" });
  
      setLatestToast({
        id: Date.now(),
        count: nextCount,
      });
    }, [state.count]);
  
    const dismissToast = useCallback(() => {
      setLatestToast(null);
    }, []);
  
    const value = useMemo(
      () => ({
        count: state.count,
        increment,
        latestToast,
        dismissToast,
      }),
      [state.count, increment, latestToast, dismissToast]
    );
  
    return (
      <CounterContext.Provider value={value}>
        {children}
      </CounterContext.Provider>
    );
  }