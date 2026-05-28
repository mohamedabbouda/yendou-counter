import type { CounterAction } from "../types/counter.types";

type CounterControlsProps = {
  count: number;
  step: number;
  min: number;
  max: number;
  dispatch: React.Dispatch<CounterAction>;
};

export function CounterControls({
  count,
  step,
  min,
  max,
  dispatch,
}: CounterControlsProps) {
  const isAtMinimum = count === min;
  const isAtMaximum = count === max;
  const isAtZero = count === 0;

  return (
    <section className="controls" aria-label="Counter controls">
      <button
        type="button"
        className="control-button secondary"
        onClick={() => dispatch({ type: "decrement" })}
        disabled={isAtMinimum}
        aria-label={`Decrease counter by ${step}`}
      >
        −
      </button>

      <button
        type="button"
        className="control-button primary"
        onClick={() => dispatch({ type: "increment" })}
        disabled={isAtMaximum}
        aria-label={`Increase counter by ${step}`}
      >
        +
      </button>

      <button
        type="button"
        className="control-button reset"
        onClick={() => dispatch({ type: "reset" })}
        disabled={isAtZero}
      >
        Reset
      </button>
    </section>
  );
}