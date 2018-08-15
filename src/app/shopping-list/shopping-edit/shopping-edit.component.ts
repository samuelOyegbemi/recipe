import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../general/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string = "";
  ingredientAmount: number = 0;
  ingredient: Ingredient = new Ingredient("", 0);
  constructor() { }

  ngOnInit() {
  }
}
