import { useGlobalContext } from "../contexts/RecipeContext";
import Nav from "../components/Nav";
import { CircleDashed, DeleteIcon, Edit2Icon, EyeIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
    const { loading, recipes, deleteRecipeFromDatabase } = useGlobalContext();
    async function deleteRecipe(id) {
        await deleteRecipeFromDatabase(id);
        window.alert('Recipe Deleted');
    }

    return (
        <div className="h-screen bg-gray-900 text-[#dadada] flex flex-col items-center">
            <Nav />
            {loading &&
                <div className="flex justify-center items-center h-[60vh]">
                    <CircleDashed className="w-12 h-12 text-[#dadada] animate-spin" />
                </div>
            }

            <div className="grid w-full grid-cols-1 gap-4 p-4 overflow-auto md:grid-cols-3 md:gap-8 md:p-8 md:px-24">
                {!loading && recipes.map((recipe) => {
                    return (
                        <div key={recipe.id} className="flex flex-col gap-4 p-4 bg-gray-800 rounded-lg shadow-md">
                            <img src={recipe.imageUrl} alt="image" className="object-cover w-full h-48" />
                            <h2 className="text-[#f59e0b]">{recipe.title}</h2>
                            <p>{recipe.description}</p>

                            <div className="flex flex-wrap justify-center md:justify-center lg:justify-end gap-4 mt-auto">
                                <Link to={`/edit/${recipe.id}`} className="flex items-center px-4 py-2 text-xl text-white bg-yellow-600 rounded hover:bg-yellow-700">
                                    Edit
                                    <Edit2Icon className="w-5 h-5 ml-2" />
                                </Link>
                                <button onClick={() => deleteRecipe(recipe.id)}
                                    className="flex items-center px-4 py-2 text-xl text-white bg-red-500 rounded hover:bg-red-600">
                                    Delete
                                    <Trash2Icon className="w-5 h-5 ml-2" />
                                </button>
                                <Link to={`/recipe/${recipe.id}`} className="flex items-center px-4 py-2 text-xl text-white bg-green-500 rounded hover:bg-green-600">
                                    View Recipe
                                    <EyeIcon className="w-6 h-6 ml-2" />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export { Home }