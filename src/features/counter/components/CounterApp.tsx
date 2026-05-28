import { useMemo, useReducer } from "react";
import { MAX_COUNT, MIN_COUNT } from "../lib/counter.constants";
import {
  counterReducer,
  initialCounterState,
} from "../lib/counter.reducer";
import { getCountLabel } from "../lib/counter.utils";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { CounterControls } from "./CounterControls";
import { CounterDisplay } from "./CounterDisplay";
import { CounterHistory } from "./CounterHistory";
import { CounterStats } from "./CounterStats";
import { KeyboardHints } from "./KeyboardHints";
import { StepSelector } from "./StepSelector";

export function CounterApp() {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  useKeyboardShortcuts({ dispatch });

  const isAtMaximum = state.count === MAX_COUNT;
  const isAtMinimum = state.count === MIN_COUNT;

  const countLabel = getCountLabel(state.count, MIN_COUNT, MAX_COUNT);
  const statusClassName = countLabel.toLowerCase().replaceAll(" ", "-");

  const statusMessage = useMemo(() => {
    if (isAtMaximum) {
      return `Counter is at the maximum value of ${MAX_COUNT}.`;
    }

    if (isAtMinimum) {
      return `Counter is at the minimum value of ${MIN_COUNT}.`;
    }

    if (state.lastAction === "reset") {
      return "Counter reset to zero.";
    }

    if (state.lastAction === "step-change") {
      return `Step changed to ${state.step}.`;
    }

    return `Counter value is ${state.count}.`;
  }, [isAtMaximum, isAtMinimum, state.count, state.lastAction, state.step]);

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

          <span className={`status-pill ${statusClassName}`}>
            {countLabel}
          </span>
        </header>

        <CounterDisplay count={state.count} lastAction={state.lastAction} />

        <CounterControls
          count={state.count}
          step={state.step}
          min={MIN_COUNT}
          max={MAX_COUNT}
          dispatch={dispatch}
        />

        <StepSelector currentStep={state.step} dispatch={dispatch} />

        <CounterStats
          count={state.count}
          step={state.step}
          min={MIN_COUNT}
          max={MAX_COUNT}
        />

        <CounterHistory history={state.history} />

        <KeyboardHints />

        <p className="sr-only" aria-live="polite">
          {statusMessage}
        </p>
      </section>
    </main>
  );
}