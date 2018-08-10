import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../general/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Orange", 8),
    new Ingredient("Tomato", 3)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngridientAdded(ingr: Ingredient){
    this.ingredients.push(ingr);
  }
}
