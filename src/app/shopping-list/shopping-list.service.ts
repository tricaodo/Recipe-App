import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

export class ShoppingListService{
  addIngredientEmitter = new EventEmitter<Ingredient[]>();
  shoppingListSubject = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  public getIngredients(): Ingredient[]{
    return this.ingredients.slice();
  }
  public addIngredient(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
    this.addIngredientEmitter.emit(this.ingredients.slice());
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]): void{
    this.ingredients.push(...ingredients);
    this.addIngredientEmitter.emit(this.ingredients.slice());
  }

  public updateIngredient(index: number, ingredient: Ingredient){
    this.ingredients[index] = ingredient;
    this.addIngredientEmitter.emit(this.ingredients.slice());
  }

  public getIngredient(index: number): Ingredient{
    return this.ingredients[index];
  }
}
