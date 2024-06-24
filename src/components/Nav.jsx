import { ChefHat, PlusCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {

    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className="flex items-center justify-between w-full gap-2 bg-gray-800 md:px-24">
            <Link to="/" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            >

                <div className="relative flex items-center gap-2 p-4">
                    <ChefHat className={`w-12 h-12 text-[#f59e0b]  ${isHovered && "animate-bounce"}`} />
                    <p className="w-max">
                        YumChef
                    </p>
                </div>
            </Link >


            <Link to="/add" className="flex items-center gap-2 p-4  text-[#f59e0b] text-center">
                Add Recipe
                <PlusCircle className={`w-6 h-6 mx-auto text-[#f59e0b]`} />
            </Link>
        </div >
    );
}