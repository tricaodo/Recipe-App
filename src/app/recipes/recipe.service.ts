import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

export class RecipeService {
  selectedRecipeEmitter = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [new Recipe('Chicken Nugget', 'This is the first recipe',
    'https://cdn-image.realsimple.com/sites/default/files/styles/rs_medium_image/public/1554827484/neapolitan-pizza-0519foo.jpg?itok=0nsG01If&1554827902',
    [
      new Ingredient('Bun', 1),
      new Ingredient('Cheese', 2)
    ]
  ),

    // tslint:disable-next-line:max-line-length
    new Recipe('Salmon Fish', 'This is the second recipe',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*',
      [
        new Ingredient('Tomatoes', 2),
        new Ingredient('Green Onion', 1)
      ]
    ),
    // tslint:disable-next-line:max-line-length
    new Recipe('Spaghetti', 'This is the third recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjotbRP92R11sttPZNTzX91Hm1CAQSGn8y54b4a_4AdZzrbBh',
      [
        new Ingredient('Chilly', 2),
        new Ingredient('Meat', 3)
      ]
    )];

  constructor(private shoppinglistService: ShoppingListService) {
  }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppinglistService.addIngredientsToShoppingList(ingredients);
  }

  public getRecipe(id: number): Recipe{
    return this.recipes[id];
  }
}
