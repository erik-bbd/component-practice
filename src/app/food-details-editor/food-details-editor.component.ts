import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-food-details-editor',
  templateUrl: './food-details-editor.component.html',
  styleUrls: ['./food-details-editor.component.scss']
})
export class FoodDetailsEditorComponent implements OnInit {

  @Input() food?: Food;

  constructor(private foodService: FoodServiceService) { }

  ngOnInit(): void {
  }

  removeFood(): void {
    this.foodService.removeFood(this.food!);
    
  }

}
