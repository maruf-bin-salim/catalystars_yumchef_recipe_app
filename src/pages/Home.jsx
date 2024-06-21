import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/RecipeContext";

function Home() {
    const { loading, recipes } = useGlobalContext();
    return (
        <div className="bg-red-500">
            <h1>Home Page</h1>
            {loading && <p>Loading...</p>}
            {recipes.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p>{recipe.description}</p>
                        <img src={recipe.imageUrl} alt="image" />
                        <p>{recipe.steps}</p>
                    </div>
                );
            })}
    </div>
    );
}

export { Home }