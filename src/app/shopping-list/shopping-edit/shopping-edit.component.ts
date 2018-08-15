import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../general/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string = "";
  ingredientAmount: number = 0;
  ingredient: Ingredient = new Ingredient("", 0);
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(){
    this.ingredient = new Ingredient(this.ingredientName, this.ingredientAmount);
    this.slService.addIngredient(this.ingredient)
  }
}
