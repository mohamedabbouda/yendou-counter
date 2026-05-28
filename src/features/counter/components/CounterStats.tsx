type CounterStatsProps = {
    count: number;
    step: number;
    min: number;
    max: number;
  };
  
  export function CounterStats({ count, step, min, max }: CounterStatsProps) {
    return (
      <section className="insights-grid" aria-label="Counter details">
        <article>
          <span>Current step</span>
          <strong>{step}</strong>
        </article>
  
        <article>
          <span>Distance to max</span>
          <strong>{max - count}</strong>
        </article>
  
        <article>
          <span>Distance to min</span>
          <strong>{count - min}</strong>
        </article>
      </section>
    );
  }