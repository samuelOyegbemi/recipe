import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../general/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  ingredientName: string = "";
  ingredientAmount: number = 0;
  ingredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    this.ingredient = new Ingredient(this.ingredientName, this.ingredientAmount);
    this.ingredientAdded.emit(this.ingredient);
  }
}
