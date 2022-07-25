import { Injectable } from '@angular/core';
import { FOODS } from './mock-foods';
import { Food } from './food';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  foods: Food[] = [];

  constructor() { }

  getFoods(): Observable<Food[]> {
    const foods = of(this.foods);
    return foods
  }

  addFood(food: Food): void {
    this.foods.push(food);
  }

  removeFood(food: Food): void {
    this.foods.splice(this.foods.indexOf(food, 0), 1);
  }
}
