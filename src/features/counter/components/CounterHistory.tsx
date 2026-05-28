type CounterHistoryProps = {
    history: number[];
  };
  
  export function CounterHistory({ history }: CounterHistoryProps) {
    return (
      <section className="history-panel" aria-labelledby="history-title">
        <div className="section-heading">
          <h2 id="history-title">Recent values</h2>
          <span>{history.length} tracked</span>
        </div>
  
        <ol className="history-list">
          {history.map((value, index) => (
            <li key={`${value}-${index}`}>
              <span>{index === 0 ? "Now" : `${index} step ago`}</span>
              <strong>{value}</strong>
            </li>
          ))}
        </ol>
      </section>
    );
  }