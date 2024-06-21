import { supabase } from "../supabase";

export async function getRecipes() {

    const { data, error } = await supabase.from("recipes").select('*');
    return {
        data: data,
        error: error
    }
}