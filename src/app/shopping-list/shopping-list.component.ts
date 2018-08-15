import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../general/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ings:Ingredient[])=>{
        this.ingredients = ings;
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
