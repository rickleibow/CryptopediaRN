import React, { FC, useState } from 'react';

interface ISearchContext {
  filter?: string;
  setFilter?: (filter: string) => void;
}

export const SearchContext = React.createContext<ISearchContext>({});

export const SearchContextProvider: FC = ({ children }) => {
  const [filter, setFilter] = useState('');

  return (
    <SearchContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
