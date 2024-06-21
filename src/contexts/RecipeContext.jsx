import React, { useState, useContext } from "react";

const RecipeContext = React.createContext();

const RecipeProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);


  return (
    <RecipeContext.Provider
      value={{
        loading,
        setLoading,
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