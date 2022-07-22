import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodServiceService } from '../food-service.service';
import { FoodDetailsComponent } from '../food-details/food-details.component';
import { FoodDetailsEditorComponent } from '../food-details-editor/food-details-editor.component';
import { FoodAddComponent } from '../food-add/food-add.component';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent implements OnInit {

  foods: Food[] = [];
  selectedFood?: Food;
  addingFood?: Boolean;

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
  }

  onAdd(): void{
    this.addingFood = true
  }

}
