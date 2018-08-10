import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../general/ingredient.model';

@Component({
  selector: 'app-shopping-list-items',
  templateUrl: './shopping-list-items.component.html',
  styleUrls: ['./shopping-list-items.component.css']
})
export class ShoppingListItemsComponent implements OnInit {
  @Input() ingredientItem: Ingredient;
  constructor() { }

  ngOnInit() {
  }

}
