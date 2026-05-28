import { useEffect } from "react";
import { useCounter } from "../../hooks/useCounter";

export function IncrementToast() {
  const { latestToast, dismissToast } = useCounter();

  useEffect(() => {
    if (!latestToast) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      dismissToast();
    }, 2600);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [latestToast, dismissToast]);

  if (!latestToast) {
    return null;
  }

  return (
    <div
      key={latestToast.id}
      className="toast-shell"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="toast-icon" aria-hidden="true">
        ✓
      </div>

      <div className="toast-copy">
        <strong>Incremented</strong>
        <span>Counter is now {latestToast.count}</span>
      </div>
    </div>
  );
}