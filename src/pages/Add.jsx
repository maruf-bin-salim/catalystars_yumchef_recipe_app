import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contexts/RecipeContext";
import { useState } from "react";
import Nav from "../components/Nav";
import { ArrowLeft, CircleDashed } from "lucide-react";

function Add() {

    const { loading, addRecipeToDatabase } = useGlobalContext();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [steps, setSteps] = useState("");
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);





    async function handleAddRecipe() {

        await addRecipeToDatabase(title, imageUrl, description, steps);
        window.alert('Recipe added');


        // clear the form
        setTitle("");
        setDescription("");
        setImageUrl("");
        setSteps("");
    }

    return (
        <div className="h-screen bg-gray-900 text-[#dadada] flex flex-col items-center">
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
            {!loading && (
                <>
                    <div className="flex flex-col gap-4 flex-1 overflow-auto mx-4 md:mx-24 w-[90%] md:w-2/3 bg-gray-800 shadow-md mt-10 p-6 rounded-lg animate-slide">
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
                        <div className="flex flex-col flex-1 gap-2">
                            <label className="text-[#dadada]">Steps</label>
                            <textarea
                                value={steps}
                                onChange={(e) => {

                                    // if user is removing text
                                    if (e.target.value.length < steps.length) {
                                        console.log("removing text");
                                        setSteps(e.target.value);
                                        return;
                                    }

                                    // if user is adding text
                                    console.log("adding text");

                                    let currentChar = e.target.value.split('')[e.target.selectionStart - 1];
                                    let previousChar = e.target.value.split('')[e.target.selectionStart - 2];


                                    if (!previousChar || previousChar !== '.') {
                                        console.log('user is not trying to add anything after a period');
                                        setSteps(e.target.value);
                                        return;
                                    }

                                    if (currentChar === '\n' || currentChar === ' ') {
                                        console.log('user is trying to add text after a period that is a new line or space');
                                        let text = e.target.value;
                                        setSteps(text);
                                        return;
                                    }


                                    console.log('user is trying to add text after a period that is not a new line or space');
                                    let text = e.target.value;
                                    text = text.slice(0, e.target.selectionStart - 1);
                                    // update the text with a new line
                                    text += "\n" + e.target.value.slice(e.target.selectionStart - 1);
                                    setSteps(text);
                                    return;

                                }}
                                className="flex-1 p-2 md:min-h-80 rounded-lg bg-[#3a3a3a] text-[#dadada] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center w-full p-4 md:justify-end">
                        <button
                            className="p-2 text-white bg-yellow-700 rounded-lg shadow-md cursor-pointer hover:bg-yellow-800 hover:animate-shrink"
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