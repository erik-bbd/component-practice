import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent implements OnInit {

  foods: Food[] = [];
  selectedFood?: Food;
  editingFood: Boolean = false;

  constructor(private foodService: FoodServiceService) { }

  ngOnInit(): void {
    this.getFoods();
  }
  
  getFoods(): void {
    this.foodService.getFoods()
      .subscribe(foods => this.foods = foods);
  }

  onSelect(food: Food): void {
    this.selectedFood = food;
    this.editingFood = true;
  }

  addFood(): void{
    this.editingFood = true
  }

  handleOnSave(food: any){
    this.foodService.addFood(food);
    this.editingFood = false;
  }

}
