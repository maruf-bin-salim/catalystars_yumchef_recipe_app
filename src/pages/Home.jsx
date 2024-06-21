import { useGlobalContext } from "../contexts/RecipeContext";
import Nav from "../components/Nav";
import { CircleDashed } from "lucide-react";

function Home() {
    const { loading, recipes } = useGlobalContext();
    return (
        <div className="h-screen bg-[#161616] text-[#dadada] flex flex-col items-center">
            <Nav />
            {loading &&
                <div className="flex justify-center items-center h-[60vh]">
                    <CircleDashed className="w-12 h-12 text-[#dadada] animate-spin" />
                </div>
            }

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 w-full p-4 md:p-8 md:px-24 overflow-auto">
                {recipes.map((recipe) => {
                    return (
                        <div key={recipe.id} className="bg-[#1a1a1a] p-4 rounded-lg">
                            <h2 className="text-[#f59e0b]">{recipe.title}</h2>
                            <img src={recipe.imageUrl} alt="image" className="w-full h-48 object-cover" />
                            <p>{recipe.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export { Home }