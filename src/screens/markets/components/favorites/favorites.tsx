import React, { FC, useState } from 'react';

interface IFavoritesContext {
  isFavoritesActive?: boolean;
  setFavoritesActive?: (isFavorites: boolean) => void;
}

export const FavoritesContext = React.createContext<IFavoritesContext>({});

export const FavoritesContextProvider: FC = ({ children }) => {
  const [isFavoritesActive, setFavoritesActive] = useState(false);

  return (
    <FavoritesContext.Provider
      value={{
        isFavoritesActive,
        setFavoritesActive,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
