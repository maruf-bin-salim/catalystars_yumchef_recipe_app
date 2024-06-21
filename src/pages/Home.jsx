import { useGlobalContext } from "../contexts/RecipeContext";
import Nav from "../components/Nav";
import { CircleDashed, Edit2Icon, EyeIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
    const { loading, recipes } = useGlobalContext();
    return (
        <div className="h-screen bg-gray-900 text-[#dadada] flex flex-col items-center">
            <Nav />
            {loading &&
                <div className="flex justify-center items-center h-[60vh]">
                    <CircleDashed className="w-12 h-12 text-[#dadada] animate-spin" />
                </div>
            }

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 w-full p-4 md:p-8 md:px-24 overflow-auto">
                {recipes.map((recipe) => {
                    return (
                        <div key={recipe.id} className="bg-gray-800 rounded-lg shadow-md flex flex-col gap-4 p-4 hover:bg-gray-700">
                            <img src={recipe.imageUrl} alt="image" className="w-full h-48 object-cover" />
                            <h2 className="text-[#f59e0b]">{recipe.title}</h2>
                            <p>{recipe.description}</p>

                            <div className="flex md:justify-end gap-4 py-4 md:p-8">

                                <Link to={`/edit/${recipe.id}`} className="flex gap-2 w-max">Edit <Edit2Icon className="w-6 h-6" />
                                </Link>
                                <Link to={`/recipe/${recipe.id}`} className="flex gap-2 w-max">View Recipe <EyeIcon className="w-6 h-6" />
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