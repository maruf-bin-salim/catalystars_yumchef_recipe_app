import { useEffect, useState } from "react";
import { addRecipe } from "../database/functions/addRecipe";
import { deleteRecipe } from "../database/functions/deleteRecipe";
import { getRecipes } from "../database/functions/getRecipes";
import { updateRecipe } from "../database/functions/updateRecipe";


export default function useRecipe() {
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);



    const deleteRecipeFromDatabase = async (id) => {
        setLoading(true);
        const { error } = await deleteRecipe(id);
        if (error) {
            console.log(error);
        } else {
            const newRecipes = recipes.filter((recipe) => recipe.id !== id);
            setRecipes(newRecipes);
        }
        setLoading(false);
    }

    const getAllRecipesFromDatabase = async () => {
        setLoading(true);
        const { data, error } = await getRecipes();
        if (error) {
            console.log(error);
        } else {
            setRecipes(data);
        }
        setLoading(false);
    }

    const updateRecipeInDatabase = async (id, title, imageUrl, description, steps) => {


        setLoading(true);
        const { error } = await updateRecipe(id, title, imageUrl, description, steps);
        if (error) {
            console.log(error);
        } else {
            const newRecipes = recipes.map((recipe) => {
                if (recipe.id === id) {
                    return {
                        id: id,
                        title: title,
                        imageUrl: imageUrl,
                        description: description,
                        steps: steps
                    }
                }
                return recipe;
            });
            setRecipes(newRecipes);
        }
        setLoading(false);
    }

    const addRecipeToDatabase = async (title, imageUrl, description, steps) => {
        setLoading(true);
        const { error } = await addRecipe(title, imageUrl, description, steps);
        if (error) {
            console.log(error);
        } else {
            getAllRecipesFromDatabase();
        }
        setLoading(false);
    }



    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            getAllRecipesFromDatabase();
        }
        return () => {
            isMounted = false;
        }
    }, []);


    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            if (selectedRecipeId) {
                const recipe = recipes.find((recipe) => recipe.id === selectedRecipeId);
                setSelectedRecipe(recipe);
            }
        }
        return () => {
            isMounted = false;
        }
    }
        , [selectedRecipeId, recipes]);




    return {
        loading,
        recipes,
        selectedRecipe,
        setSelectedRecipeId,
        deleteRecipeFromDatabase,
        updateRecipeInDatabase,
        addRecipeToDatabase
    }

}
