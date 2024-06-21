import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/RecipeContext";

function Add() {

    const { addRecipeToDatabase } = useGlobalContext();

    return (
        <div>
            <h1>Add Page</h1>
            <button onClick={() => addRecipeToDatabase(
                "New Recipe",
                "This is a new recipe",
                "https://via.placeholder.com/150",
                "Step 1, Step 2, Step 3"
            )}>Add Recipe</button>

            <Link to="/">Home</Link>
        </div>
    );
}

export { Add }