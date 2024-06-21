import { useEffect } from "react";
import { addRecipe } from "../database/functions/addRecipe";
import { updateRecipe } from "../database/functions/updateRecipe";
import { getRecipes } from "../database/functions/getRecipes";
import { deleteRecipe } from "../database/functions/deleteRecipe";

function Add() {

    useEffect(() => {
        // addRecipe("Pancakes", "https://images.unsplash.com/photo-1611473831310-6b4a7b9e2e5b", "Delicious pancakes", "Mix flour and eggs, cook on a pan.");
        // updateRecipe("cd3f6e91-9277-4cdf-90ef-e3a8891ae13f", "Pancakes", "https://images.unsplash.com/photo-1611473831310-6b4a7b9e2e5b", "Delicious pancakes 2", "Mix flour and eggs, cook on a pan.");
        // getRecipes().then((response) => {
        //     console.log(response.data);
        // });
        deleteRecipe("cd3f6e91-9277-4cdf-90ef-e3a8891ae13f");

    }, []);

    return (
        <div>
            <h1>Add Page</h1>
        </div>
    );
}

export { Add }