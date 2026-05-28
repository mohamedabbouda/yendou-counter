import { MAX_HISTORY_ITEMS } from "./counter.constants";

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function addToHistory(history: number[], nextValue: number) {
  return [nextValue, ...history].slice(0, MAX_HISTORY_ITEMS);
}

export function getCountLabel(count: number, min: number, max: number) {
  if (count === max) return "Maximum reached";
  if (count === min) return "Minimum reached";
  if (count > 0) return "Positive";
  if (count < 0) return "Negative";

  return "Neutral";
}