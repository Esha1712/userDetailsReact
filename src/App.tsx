import UserCard from "./components/UserCard";
import { useRandomUser } from "./hooks/useRandomUser";

function App() {
  const { user, loading, error, refreshUser } = useRandomUser();

  return (
    <div className="app">
      <div className={`container ${loading ? "is-loading" : ""}`}>
        <h1>Random User</h1>
        {error && <p className="error">{error}</p>}
        {user && <UserCard user={user} />}
        <button onClick={refreshUser} disabled={loading}>
          Refresh
        </button>
      </div>
    </div>

  );
}

export default App;
