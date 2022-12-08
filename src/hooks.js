import React from "react";
import { useSearchParams } from "react-router-dom";

export function useSearchParamsWithLocal(initialValue = {}, localStorageKey) {
  function setInitialDate() {
    const dateFromLocalStorage = JSON.parse(
      localStorage.getItem(localStorageKey)
    );

    return dateFromLocalStorage || initialValue;
  }

  const [searchParams, setSearchParams] = useSearchParams(setInitialDate());

  React.useEffect(() => {
    const entries = Array.from(searchParams.entries());
    const newObj = entries.reduce(
      (acc, element) => (acc = { ...acc, [element[0]]: element[1] }),
      {}
    );

    localStorage.setItem(localStorageKey, JSON.stringify(newObj));
  }, [localStorageKey, searchParams]);

  return [searchParams, setSearchParams];
}

export function useLocalStorage(initialValue = {}, localStorageKey) {
  function setInitialDate() {
    const fomLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));

    return fomLocalStorage || initialValue;
  }

  const [value, setValue] = React.useState(setInitialDate());

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
}
