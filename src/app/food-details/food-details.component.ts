import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  @Input() food?: Food;

  constructor() { }

  ngOnInit(): void {
  }

}
