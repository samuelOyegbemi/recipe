import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../general/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientCleared = new EventEmitter<{clear:boolean}>();
  

  @ViewChild("ingredientAmt") ingrd: ElementRef;
  ingredientName: string = "";
  ingredientAmount: number = 0;
  ingredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    this.ingredientAmount = this.ingrd.nativeElement.value;
    this.ingredient = new Ingredient(this.ingredientName, this.ingredientAmount);
    this.ingredientAdded.emit(this.ingredient);
  }

  clearIngredient(){
    this.ingredientCleared.emit({clear:true});
  }
}
