import { ChefHat, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="flex justify-between items-center bg-gray-800 gap-2 md:px-24 w-full">
            <div className="flex items-center p-4  gap-2">
                <ChefHat className="w-12 h-12 text-[#f59e0b]" />
                <p>
                    YumChef
                </p>
            </div>

            <Link to="/add" className="flex items-center gap-2 p-4  text-[#f59e0b] text-center">
                Add Recipe
                <PlusCircle className="w-6 h-6 mx-auto" />
            </Link>
        </div>
    );
}