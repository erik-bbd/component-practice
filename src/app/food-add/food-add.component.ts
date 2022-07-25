import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Input() food: any;
  public foodForm: FormGroup;

  constructor() {
    this.foodForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      ingredients: new FormControl('')
    });
  }

  ngOnInit() {
    if (this.food) {
      this.foodForm.setValue(this.food);
    }
  }

  onSubmit() {
    this.onSave.emit(this.foodForm.value);
    this.foodForm.reset();
  }
}
