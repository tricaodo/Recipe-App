import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService{
  addIngredientEmitter = new EventEmitter<Ingredient[]>();
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
}
