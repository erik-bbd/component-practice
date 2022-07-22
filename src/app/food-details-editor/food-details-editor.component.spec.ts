import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsEditorComponent } from './food-details-editor.component';

describe('FoodDetailsEditorComponent', () => {
  let component: FoodDetailsEditorComponent;
  let fixture: ComponentFixture<FoodDetailsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDetailsEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDetailsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
