import { CounterProvider } from "../context/CounterContext";
import { Counter } from "./Counter";
import { IncrementToast } from "./toast/IncrementToast";

export function CounterApp() {
  return (
    <CounterProvider>
      <main className="app-shell">
        <Counter />
        <IncrementToast />
      </main>
    </CounterProvider>
  );
}