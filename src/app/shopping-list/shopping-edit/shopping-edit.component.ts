import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountRef: ElementRef;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(){
    const name: string = this.nameRef.nativeElement.value;
    const amount: number = this.amountRef.nativeElement.value;
    const newIngredient: Ingredient = new Ingredient(name, amount);
    this.shoppinglistService.addIngredient(newIngredient);
  }
}
