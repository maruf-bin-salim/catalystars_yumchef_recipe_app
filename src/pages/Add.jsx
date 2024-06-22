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

    function addNewlineAfterPeriod(text) {
        let updatedText = '';

        for (let i = 0; i < text.length; i++) {
            updatedText += text[i];

            if (text[i] === '.' && i < text.length - 1 && text[i + 1] !== '\n') {
                updatedText += '\n';
            }
        }

        return updatedText;
    }



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
                <button onClick={() => navigate(-1)} >
                    <ArrowLeft className="w-8 h-8" />
                </button>
            </div>

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
                        <div className="flex flex-col flex-1 gap-2">
                            <label className="text-[#dadada]">Steps</label>
                            <textarea
                                value={steps}
                                onChange={(e) => {
                                    if (e.target.value.split('').pop() === '.') {

                                        // user is trying to remove the last period of the string
                                        if (e.target.value.length < steps.length) {

                                            // remove the last period and the all the previous consecutive periods, newlines combination
                                            let updatedText = e.target.value;
                                            let i = updatedText.length - 1;
                                            while (i >= 0 && (updatedText[i] === '.' || updatedText[i] === '\n')) {
                                                i--;
                                            }

                                            updatedText = updatedText.slice(0, i + 1);
                                            // set the updated text
                                            setSteps(updatedText);
                                            return;

                                        }
                                        // user is trying to add a period at the end of the string
                                        // add a newline after the period
                                        setSteps(e.target.value + '\n');
                                        return;
                                    }

                                    // not relevant to the period, so just update the state
                                    setSteps(e.target.value);
                                }}
                                className="flex-1 p-2 md:min-h-80 rounded-lg bg-[#3a3a3a] text-[#dadada] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center w-full p-4 md:justify-end">
                        <button
                            className="p-2 text-white bg-yellow-700 rounded-lg shadow-md hover:bg-yellow-800"
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