import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NoRecipeComponent} from './recipes/no-recipe/no-recipe.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},

  {path: 'recipes', component: RecipesComponent, children:
      [
        {path: ':id', component: RecipeDetailComponent},
        {path: '', component: NoRecipeComponent},
      ]
  },

  {path: 'shopping-list', component: ShoppingListComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
