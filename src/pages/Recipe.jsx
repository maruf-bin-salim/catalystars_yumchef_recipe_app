import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/RecipeContext";
import { useEffect } from "react";
import Nav from "../components/Nav";
import { CircleDashed, LucideSignalZero, Trash2Icon, XCircleIcon } from "lucide-react";

function Recipe() {
    const { id } = useParams();
    const { selectedRecipe, loading, setSelectedRecipeId, deleteRecipeFromDatabase } = useGlobalContext();
    useEffect(() => {
        setSelectedRecipeId(id);
    }, [id]);

    let navigate = useNavigate();

    async function deleteRecipe() {
        await deleteRecipeFromDatabase(id);
        navigate("/");
    }


    return (
        <div className="h-screen bg-gray-900 text-[#dadada] flex flex-col items-center">
            <Nav />
            {loading &&
                <div className="flex justify-center items-center h-[60vh]">
                    <CircleDashed className="w-12 h-12 text-[#dadada] animate-spin" />
                </div>
            }

            {!loading && selectedRecipe && (
                <div className="flex flex-col gap-4 p-4 md:p-8 md:px-24 flex-1 overflow-auto w-full">
                    <h2 className="text-[#f59e0b] text-2xl md:text-4xl">{selectedRecipe.title}</h2>
                    <p>{selectedRecipe.description}</p>
                    <img src={selectedRecipe.imageUrl} alt="image" className="h-48 w-48" />
                    <p>
                        <span className="font-bold"> Steps : </span>
                        <br />
                        {selectedRecipe.steps}
                    </p>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-max flex" onClick={deleteRecipe}>    
                        <Trash2Icon className="w-6 h-6 mr-2" />
                        Delete Recipe 
                    </button>
                </div>
            )}

            {
                !loading && !selectedRecipe && (
                    <div className="flex justify-center items-center h-[60vh]">
                        <XCircleIcon className="w-12 h-12 text-[#dadada] mr-2" />
                        <p className="text-xl">Recipe not found</p>
                    </div>
                )
            }
        </div>
    );
}

export { Recipe }