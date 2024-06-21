import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/RecipeContext";

function Edit() {

    const { id } = useParams();
    const { selectedRecipe, setSelectedRecipeId } = useGlobalContext();
    useEffect(() => {
        setSelectedRecipeId(id);
    }, [id]);


    return (
        <div>
            <h1>Edit Page</h1>
            {selectedRecipe && (
                <div>
                    <h2>{selectedRecipe.title}</h2>
                    <p>{selectedRecipe.description}</p>
                    <img src={selectedRecipe.imageUrl} alt="image" />
                    <p>{selectedRecipe.steps}</p>
                </div>
            )}
        </div>
    );
}

export { Edit }