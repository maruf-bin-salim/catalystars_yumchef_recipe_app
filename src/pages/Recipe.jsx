import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/RecipeContext";
import { useEffect } from "react";
import Nav from "../components/Nav";
import { ArrowLeft, CircleDashed, Trash2Icon, XCircleIcon } from "lucide-react";


function Recipe() {
    const { id } = useParams();
    const { selectedRecipe, loading, setSelectedRecipeId, deleteRecipeFromDatabase } = useGlobalContext();
    useEffect(() => {
        setSelectedRecipeId(id);
    }, [id]);

    let navigate = useNavigate();


    return (
        <div className="h-screen bg-gray-900 text-[#dadada] flex flex-col">
            <Nav />
            <div className="flex justify-endflex justify-start w-full p-4 ">
                <button onClick={() => navigate(-1)} >
                    <ArrowLeft className="w-8 h-8" />
                </button>
            </div>
            {loading && (
                <div className="flex justify-center items-center h-[60vh]">
                    <CircleDashed className="w-12 h-12 text-[#dadada] animate-spin" />
                </div>
            )}

            {!loading && selectedRecipe && (
                <div className="flex flex-col p-4 md:p-8 md:px-40 flex-1 overflow-auto w-full gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <img src={selectedRecipe.imageUrl} alt="Recipe" className="h-80 w-full md:w-80 object-cover rounded-lg shadow-md" />
                        <div className="flex flex-col  text-center md:text-left md:ml-10 ">
                            <h2 className="text-[#f59e0b] text-2xl md:text-4xl">{selectedRecipe.title}</h2>
                            <p className="text-[#dadada] mt-2">{selectedRecipe.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 ">
                        <p className="text-[#dadada] whitespace-pre-wrap text-left">
                            <span className="font-bold">Steps</span>
                            <br />
                            <br />
                            {selectedRecipe.steps}
                        </p>
                       
                    </div>
                </div>
            )}{

            !loading && !selectedRecipe && (
                <div className="flex justify-center items-center h-[60vh]">
                    <XCircleIcon className="w-12 h-12 text-[#dadada] mr-2" />
                    <p className="text-xl text-[#dadada]">Recipe not found</p>
                </div>
            )}
        </div>
    );

}

export { Recipe }