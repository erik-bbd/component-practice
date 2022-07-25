import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../food';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-food-details-editor',
  templateUrl: './food-details-editor.component.html',
  styleUrls: ['./food-details-editor.component.scss']
})
export class FoodDetailsEditorComponent implements OnInit {

  @Input() food?: Food;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  constructor(private foodService: FoodServiceService) { }

  ngOnInit(): void {
  }

  onEnter(){

  }

  removeFood(): void {
    this.foodService.removeFood(this.food!);
    this.close();
  }

  close(): void {
    this.onClose.emit(true);
  }

}
