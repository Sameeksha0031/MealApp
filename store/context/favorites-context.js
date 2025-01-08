import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);

  function addFavorite(id) {
    setFavoritesMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorites(id) {
    setFavoritesMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoritesMealIds,
    addFavorite: addFavorite,
    removeFavorites: removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
