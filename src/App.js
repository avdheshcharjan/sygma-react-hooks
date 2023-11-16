import { useEvmTokenTransfers } from './hooks/useEvmTokenTransfers';
import './App.css';

function App() {
  const { transfers, loading, error } = useEvmTokenTransfers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <header className="App-header">
        {transfers.map((transfer, index) => (
          <div key={index}>
            <p>From: {transfer.from}</p>
            <p>To: {transfer.to}</p>
            <p>Value: {transfer.value}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
