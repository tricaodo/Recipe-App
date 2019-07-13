import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [new Recipe('Chicken Nugget', 'This is the first recipe',
    'https://cdn-image.realsimple.com/sites/default/files/styles/rs_medium_image/public/1554827484/neapolitan-pizza-0519foo.jpg?itok=0nsG01If&1554827902'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Salmon Fish', 'This is the second recipe',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*',
    ),
    // tslint:disable-next-line:max-line-length
    new Recipe('Spaghetti', 'This is the third recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjotbRP92R11sttPZNTzX91Hm1CAQSGn8y54b4a_4AdZzrbBh',
    )];

  public getRecipes(): Recipe[] {
    return this.recipes;
  }
}
