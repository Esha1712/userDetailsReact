import { useCallback, useEffect, useState } from "react";
import { fetchRandomUser } from '../api/randomUserAPI';
import type { User } from '../types/user';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStroge';

const STORAGE_KEY = "random-user";

export const useRandomUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUser = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchRandomUser();

      // ✅ Destructuring response
      const {
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
  }, []);

  useEffect(() => {
    const storedUser = getFromLocalStorage<User>(STORAGE_KEY);
    if (storedUser) {
      setUser(storedUser);
    } else {
      getUser();
    }
  }, [getUser]);

  return { user, loading, error, refreshUser: getUser };
};
