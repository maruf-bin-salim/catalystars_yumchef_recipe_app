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
                        <div key={recipe.id} className="flex flex-col gap-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 animate-fade">
                         
                            <img src={recipe.imageUrl} alt="image" className="object-cover w-full h-48 cursor-pointer hover:animate-shrink" />
                            <h2 className="text-[#f59e0b] cursor-pointer hover:animate-shrink">{recipe.title}</h2>
                            <p className="cursor-pointer hover:animate-shrink">{recipe.description}</p>

                            <div className="flex flex-wrap justify-center gap-4 mt-auto md:justify-center lg:justify-end">
                                <Link to={`/edit/${recipe.id}`} className="flex items-center px-4 py-2 text-xl text-white bg-yellow-600 rounded hover:bg-yellow-700 hover:animate-shrink">
                                    Edit
                                    <Edit2Icon className="w-5 h-5 ml-2" />
                                </Link>
                                <button onClick={() => deleteRecipe(recipe.id)}
                                    className="flex items-center px-4 py-2 text-xl text-white bg-red-500 rounded hover:bg-red-600 hover:animate-shrink">
                                    Delete
                                    <Trash2Icon className="w-5 h-5 ml-2" />
                                </button>
                                <Link to={`/recipe/${recipe.id}`} className="flex items-center px-4 py-2 text-xl text-white bg-green-500 rounded hover:bg-green-600 hover:animate-shrink">
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