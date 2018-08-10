import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../general/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor() { }

  ngOnInit() {
  }

  onIngridientAdded(ingr: Ingredient){
    this.ingredients.push(ingr);
  }

  onIngredientCleared(clear: boolean){
    if(clear){
      this.ingredients.splice(0, this.ingredients.length);
    }
  }
}
