import { useEffect } from "react";
import type { CounterAction } from "../types/counter.types";

type UseKeyboardShortcutsParams = {
  dispatch: React.Dispatch<CounterAction>;
};

function isEditableElement(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  );
}

export function useKeyboardShortcuts({
  dispatch,
}: UseKeyboardShortcutsParams) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (isEditableElement(event.target)) {
        return;
      }

      if (event.key === "ArrowUp" || event.key === "+") {
        event.preventDefault();
        dispatch({ type: "increment" });
      }

      if (event.key === "ArrowDown" || event.key === "-") {
        event.preventDefault();
        dispatch({ type: "decrement" });
      }

      if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        dispatch({ type: "reset" });
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);
}