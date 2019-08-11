import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: true}) f: NgForm;
  ingredient: Ingredient;
  editMode = false;
  index: number;
  subscription: Subscription;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppinglistService.shoppingListSubject
      .subscribe((index: number) => {
        this.index = index;
        this.editMode = true;
        this.ingredient = this.shoppinglistService.getIngredient(index);
        this.f.setValue({
          name: this.ingredient.name,
          amount: this.ingredient.amount
        })
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient: Ingredient = new Ingredient(value.name, value.amount);

    if(this.editMode){
      this.shoppinglistService.updateIngredient(this.index,newIngredient);
    }else{
      this.shoppinglistService.addIngredient(newIngredient);
    }
    this.onClear();
  }
  onClear(){
    this.f.onReset();
    this.editMode = false;
  }
}
