import { useReducer } from "react";
import { MAX_COUNT, MIN_COUNT } from "../lib/counter.constants";
import {
  counterReducer,
  initialCounterState,
} from "../lib/counter.reducer";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { CounterControls } from "./CounterControls";
import { CounterDisplay } from "./CounterDisplay";

export function CounterApp() {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  useKeyboardShortcuts({ dispatch });

  return (
    <main className="app-shell">
      <section className="counter-card" aria-labelledby="counter-title">
        <div className="eyebrow">Yendou engineering task</div>

        <header className="hero">
          <div>
            <h1 id="counter-title">Counter, but crafted.</h1>
            <p>
              A small interface designed with edge cases, keyboard controls,
              accessibility, and interaction polish in mind.
            </p>
          </div>
        </header>

        <CounterDisplay count={state.count} lastAction={state.lastAction} />

        <CounterControls
          count={state.count}
          step={state.step}
          min={MIN_COUNT}
          max={MAX_COUNT}
          dispatch={dispatch}
        />
      </section>
    </main>
  );
}