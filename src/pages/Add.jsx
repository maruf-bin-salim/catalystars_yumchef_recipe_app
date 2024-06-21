import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contexts/RecipeContext";
import { useState } from "react";
import Nav from "../components/Nav";
import { CircleDashed } from "lucide-react";

function Add() {

    const { loading, addRecipeToDatabase } = useGlobalContext();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [steps, setSteps] = useState("");

    const navigate = useNavigate();


    async function handleAddRecipe() {
        await addRecipeToDatabase(title, imageUrl, description, steps);

        // clear the form
        setTitle("");
        setDescription("");
        setImageUrl("");
        setSteps("");
    }

    return (
        <div className="h-screen bg-gray-900 text-[#dadada] flex flex-col items-center">
            <Nav />
            {loading && (
                <div className="flex justify-center items-center h-[60vh]">
                    <CircleDashed className="w-12 h-12 text-[#dadada] animate-spin" />
                </div>
            )}
            {!loading && (
                <>
                    <div className="flex flex-col gap-4 flex-1 overflow-auto mx-4 md:mx-24 w-[90%] md:w-2/3 bg-gray-800 shadow-md mt-10 p-6 rounded-lg">
                        <div className="flex flex-col gap-2">
                            <label className="text-[#dadada]">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="p-2 rounded-lg bg-[#3a3a3a] text-[#dadada] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[#dadada]">Description</label>
                            <input
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="p-2 rounded-lg bg-[#3a3a3a] text-[#dadada] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[#dadada]">Image URL</label>
                            <input
                                type="text"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="p-2 rounded-lg bg-[#3a3a3a] text-[#dadada] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[#dadada]">Steps</label>
                            <textarea
                                value={steps}
                                onChange={(e) => setSteps(e.target.value)}
                                className="p-2 min-h-40 md:min-h-80 rounded-lg bg-[#3a3a3a] text-[#dadada] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end p-4 w-full">
                        <button
                            className="p-2 bg-yellow-700 hover:bg-yellow-800 shadow-md text-white rounded-lg"
                            onClick={handleAddRecipe}
                            disabled={loading}
                        >
                            Add Recipe
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export { Add }