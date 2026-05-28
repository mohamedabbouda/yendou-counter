import { MAX_COUNT, MIN_COUNT } from "../lib/counter.constants";
import type { CounterLastAction } from "../types/counter.types";

type CounterDisplayProps = {
  count: number;
  lastAction: CounterLastAction;
};

export function CounterDisplay({ count, lastAction }: CounterDisplayProps) {
  const animationClass = lastAction === "decrement" ? "drop" : "rise";

  return (
    <section className="counter-display" aria-live="polite" aria-atomic="true">
      <span key={count} className={`count-value ${animationClass}`}>
        {count}
      </span>

      <span className="count-range">
        Range {MIN_COUNT} to {MAX_COUNT}
      </span>
    </section>
  );
}