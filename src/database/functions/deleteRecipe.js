import { supabase } from "../supabase";

export async function deleteRecipe(id) {

    const { error } = await supabase.from("recipes").delete().match({ id: id });
    
    return {
        error: error
    }
}