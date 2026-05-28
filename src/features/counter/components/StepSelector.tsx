import { STEP_OPTIONS } from "../lib/counter.constants";
import type { CounterAction } from "../types/counter.types";

type StepSelectorProps = {
  currentStep: number;
  dispatch: React.Dispatch<CounterAction>;
};

export function StepSelector({ currentStep, dispatch }: StepSelectorProps) {
  return (
    <section className="settings-panel" aria-labelledby="settings-title">
      <div>
        <h2 id="settings-title">Step size</h2>
        <p>Choose how much each interaction changes the counter.</p>
      </div>

      <div className="step-options" role="group" aria-label="Step size">
        {STEP_OPTIONS.map((stepValue) => (
          <button
            key={stepValue}
            type="button"
            className={currentStep === stepValue ? "step active" : "step"}
            onClick={() =>
              dispatch({ type: "set-step", value: stepValue })
            }
            aria-pressed={currentStep === stepValue}
          >
            {stepValue}
          </button>
        ))}
      </div>
    </section>
  );
}