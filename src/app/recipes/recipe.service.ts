import { Recipe } from "./recipe.model";

export class RecipeService{
    constructor(){
    }

    private recipes: Recipe[] = [
        new Recipe("Jollof Rice", "This is a recipe for jollof rice", "data:image/jpeg;base64,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"),
        
        new Recipe("Fried Rice", "This is a recipe for fried rice", "data:image/jpeg;base64,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")
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
    }

    getRecipe(indx:number){
        return this.recipes[indx];
    }
}