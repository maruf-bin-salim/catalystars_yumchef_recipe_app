import React, { useContext } from "react";
import useRecipe from "../hooks/useRecipe";

const RecipeContext = React.createContext();

const RecipeProvider = ({ children }) => {
  const {
    loading,
    recipes,
    selectedRecipe,
    setSelectedRecipeId,
    deleteRecipeFromDatabase,
    updateRecipeInDatabase,
    addRecipeToDatabase
  } = useRecipe();


  return (
    <RecipeContext.Provider
      value={{
        loading,
        recipes,
        selectedRecipe,
        deleteRecipeFromDatabase,
        updateRecipeInDatabase,
        addRecipeToDatabase,
        setSelectedRecipeId,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(RecipeContext);
};

export { RecipeContext, RecipeProvider };