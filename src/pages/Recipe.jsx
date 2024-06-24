import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/RecipeContext";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { ArrowLeft, CircleDashed, Trash2Icon, XCircleIcon } from "lucide-react";


function Recipe() {
    const { id } = useParams();
    const { selectedRecipe, loading, setSelectedRecipeId, deleteRecipeFromDatabase } = useGlobalContext();
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        setSelectedRecipeId(id);
    }, [id]);

    let navigate = useNavigate();


    return (
        <div className="h-screen bg-gray-900 text-[#dadada] flex flex-col">
            <Nav />
            <div className="flex justify-start w-full p-4 justify-endflex ">
                <button onClick={() => navigate(-1)} className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <ArrowLeft className="w-8 h-8" />
                    {
                        isHovered &&
                        <span class="animate-ping absolute h-full w-full rounded-full bg-sky-400 opacity-75 top-0 left-0"></span>
                    }

                </button>
            </div>
            {loading && (
                <div className="flex justify-center items-center h-[60vh]">
                    <CircleDashed className="w-12 h-12 text-[#dadada] animate-spin" />
                </div>
            )}

            {!loading && selectedRecipe && (
                <div className="flex flex-col flex-1 w-full gap-4 p-4 overflow-auto md:p-8 md:px-40">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <img src={selectedRecipe.imageUrl} alt="Recipe" className="object-cover w-full rounded-lg shadow-md cursor-pointer h-80 md:w-80 hover:animate-imageCircle" />
                        <div className="flex flex-col text-center md:text-left md:ml-10 animate-fade">
                            <h2 className="text-[#f59e0b] text-2xl md:text-4xl cursor-pointer hover:animate-shrink">{selectedRecipe.title}</h2>
                            <p className="text-[#dadada] mt-2 cursor-pointer hover:animate-shrink">{selectedRecipe.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 ">
                        <p className="text-[#dadada] whitespace-pre-wrap text-left animate-fade">
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