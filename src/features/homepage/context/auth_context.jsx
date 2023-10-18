"use client";

import { createContext, useContext, useState } from "react";

export const CollectionsFilter = createContext(null);

export function CollectionsFilterProvider({ children }) {
  const [compostiteFilter, setCompositeFilter] = useState({
    map: [],
    side: [],
    plant: [],
  });

  function handleFilter(checked, id, value) {
    if (checked) {
      setCompositeFilter({
        ...compostiteFilter,
        [id]: [...compostiteFilter[id], value],
      });
    } else {
      setCompositeFilter({
        ...compostiteFilter,
        [id]: compostiteFilter[id].filter((arrayItem) => arrayItem !== value),
      });
    }
  }
  return (
    <CollectionsFilter.Provider
      value={{
        compostiteFilter,
        setCompositeFilter,

        handleFilter,
      }}
    >
      {children}
    </CollectionsFilter.Provider>
  );
}

export function useCollectionsFilter() {
  return useContext(CollectionsFilter);
}
