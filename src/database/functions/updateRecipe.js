import { supabase } from "../supabase";

export async function updateRecipe(id, title, imageUrl, description, steps) {

    const recipe = {
        title: title,
        imageUrl: imageUrl,
        description: description,
        steps: steps
    }

    const { error } = await supabase
        .from("recipes")
        .update(recipe)
        .match({ id: id });

    return {
        error: error
    }
}