import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
//   const [watched, setWatched] = useState([]);
  // const [query, setQuery] = useState("Inception");
  // const [SlectedId, setSlectedId] = useState(null);

  // const { movies, isLoading, error } = useMovies(query);