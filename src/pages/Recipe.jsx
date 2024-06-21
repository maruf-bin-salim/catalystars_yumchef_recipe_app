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
        <div className="h-screen bg-gray-900 text-[#dadada] flex flex-col items-center justify-center">
            <Nav />

            {loading && (
                <div className="flex justify-center items-center h-[60vh]">
                    <CircleDashed className="w-12 h-12 text-[#dadada] animate-spin" />
                </div>
            )}

            {!loading && selectedRecipe ? (
                <div className="flex flex-col p-4 md:p-8 md:px-40 flex-1 overflow-auto w-full gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <img src={selectedRecipe.imageUrl} alt="Recipe" className="h-80 w-80 object-cover rounded-lg shadow-md" />
                        <div className="flex flex-col  text-center md:text-left md:ml-10 ">
                            <h2 className="text-[#f59e0b] text-2xl md:text-4xl">{selectedRecipe.title}</h2>
                            <p className="text-[#dadada] mt-2">{selectedRecipe.description}</p>
                            <button className="bg-red-500 hover:bg-red-600 mx-auto text-white w-max px-4 mt-10 py-2 rounded flex " onClick={deleteRecipe}>
                                <Trash2Icon className="w-6 h-6 mr-2" />
                                Delete Recipe
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 ">
                        <p className="text-[#dadada] whitespace-pre-wrap text-center md:text-left">
                            <span className="font-bold">Steps:</span>
                            <br />
                            {selectedRecipe.steps}
                        </p>
                       
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-[60vh]">
                    <XCircleIcon className="w-12 h-12 text-[#dadada] mr-2" />
                    <p className="text-xl text-[#dadada]">Recipe not found</p>
                </div>
            )}
        </div>
    );

}

export { Recipe }