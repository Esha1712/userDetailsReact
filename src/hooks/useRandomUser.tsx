import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchRandomUser } from '../api/randomUserAPI';
import { type User } from '../types/user';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../utils/localStorage';

const STORAGE_KEY = 'random-user';

export const useRandomUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Ref to prevent double fetching in React 18 StrictMode
  const hasFetchedRef = useRef(false);

  const fetchUser = useCallback(async () => {
    if (loading) return;

    try {
      setLoading(true);
      setError(null);
      const data = await fetchRandomUser();

      const { // Destructure user data
        name: { first, last },
        email,
      } = data.results[0];

      const formattedUser: User = {
        fullName: `${first} ${last}`,
        email,
      };

      setUser(formattedUser);
      saveToLocalStorage(STORAGE_KEY, formattedUser);
    } catch {
      setError("Failed to fetch user");
    } finally {
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    // Prevent duplicate execution in React 18 StrictMode
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    const storedUser = getFromLocalStorage<User>(STORAGE_KEY);

    if (storedUser) {
      setUser(storedUser);
    } else {
      fetchUser();
    }
  }, [fetchUser]);

  return {
    user,
    loading,
    error,
    refreshUser: fetchUser,
  };
};
