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
        await addRecipeToDatabase(title, description, imageUrl, steps);

        // clear the form
        setTitle("");
        setDescription("");
        setImageUrl("");
        setSteps("");
    }

    return (
        <div className="h-screen bg-[#161616] text-[#dadada] flex flex-col items-center">
            <Nav />

            {loading &&

                <div className="flex justify-center items-center h-[60vh]">
                    <CircleDashed className="w-12 h-12 text-[#dadada] animate-spin" />
                </div>
            }

            {
                !loading &&
                <>
                    <div className="flex flex-col gap-4 flex-1 overflow-auto mx-24 w-[90%] md:w-2/3 bg-[#2a2a2a]">
                        <div>
                            <label>Title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label>Description</label>
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <div>
                            <label>Image URL</label>
                            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                        </div>

                        <div>
                            <label>Steps</label>
                            <textarea value={steps} onChange={(e) => setSteps(e.target.value)} />
                        </div>

                    </div>
                    <div className="flex justify-center md:justify-end p-4 md:px-24 w-full">
                        <button
                            className="p-2 bg-[#f59e0b] text-[#161616] rounded-lg"
                            onClick={handleAddRecipe} disabled={loading} >Add Recipe</button>
                    </div>
                </>

            }



        </div>
    );
}

export { Add }