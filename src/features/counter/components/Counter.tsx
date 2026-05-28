import { useCounter } from "../hooks/useCounter";

export function Counter() {
  const { count, increment } = useCounter();

  return (
    <section className="counter-card" aria-labelledby="counter-title">
      <p className="counter-eyebrow">Yendou SWE task</p>

      <div className="counter-row">
        <h1 id="counter-title">Current count {count}</h1>

        <button
          type="button"
          className="increment-button"
          onClick={increment}
          aria-label={`Increment counter from ${count} to ${count + 1}`}
        >
          +1
        </button>
      </div>
    </section>
  );
}