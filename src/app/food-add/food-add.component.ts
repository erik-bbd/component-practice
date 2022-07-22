import { Component, OnInit } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  food: Food = {name:"name", price:0, ingredients:[]};

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.food.name = (<HTMLInputElement>document.getElementById("name")).value;
    this.food.price = +(<HTMLInputElement>document.getElementById("price")).value;
    console.log(this.food);
  }

}
