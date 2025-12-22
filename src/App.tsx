import UserCard from "./components/UserCard";
import { useRandomUser } from "./hooks/useRandomUser";

function App() {
  const { user, loading, error, refreshUser } = useRandomUser();

  return (
    <div className="app">
      <h1>Random User</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && <UserCard user={user} />}

      <button onClick={refreshUser}>Refresh User</button>
    </div>
  );
}

export default App;
