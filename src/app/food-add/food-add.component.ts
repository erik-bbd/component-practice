import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Food } from '../food';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  @Output() onCLose: EventEmitter<boolean> = new EventEmitter();

  food: Food = {name:"name", price:0, ingredients:[]};

  constructor(private foodService: FoodServiceService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.food.name = (<HTMLInputElement>document.getElementById("name")).value;
    this.food.price = +(<HTMLInputElement>document.getElementById("price")).value;
    console.log(this.food);
    this.foodService.addFood(this.food);
    this.onCLose.emit(true);
  }

  onKey(): void {
    this.food.ingredients.push((<HTMLInputElement>document.getElementById("ingredient")).value);
    (<HTMLInputElement>document.getElementById("ingredient")).value = "";
  }

  // onClose(): boolean {
  //   this.onClose.emit(true);
  // }

}
