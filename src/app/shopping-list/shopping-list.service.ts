import { Subject } from "rxjs";
import { Ingredient } from "../general/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    ingredients: Ingredient[] = [
    new Ingredient("Orange", 8),
    new Ingredient("Tomato", 3)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ing:Ingredient){
        this.ingredients.push(ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ings:Ingredient[]){
        this.ingredients.push(...ings);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}