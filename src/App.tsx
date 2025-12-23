import UserCard from "./components/UserCard";
import { useRandomUser } from "./hooks/useRandomUser";

function App() {
  const { user, loading, error, refreshUser } = useRandomUser();

  return (
    <div className="app">
      <section className={`panel ${loading ? "dim" : ""}`}>
        <header className="header">
          <h1>User Profile</h1>
          <span className="subtitle">Random user generator</span>
        </header>

        {error && <div className="error">{error}</div>}
        {user && <UserCard user={user} />}

        <button onClick={refreshUser} disabled={loading}>
          Refresh
        </button>
      </section>
    </div>
  );
}

export default App;
