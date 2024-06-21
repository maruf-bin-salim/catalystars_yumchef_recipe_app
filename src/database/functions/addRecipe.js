import { supabase } from "../supabase";

export async function addRecipe(title, imageUrl, description, steps) {

    const recipe = {
        title: title,
        imageUrl: imageUrl,
        description: description,
        steps: steps
    }

    const { error } = await supabase
        .from("recipes")
        .insert([recipe]);

    return {
        error: error
    }
}