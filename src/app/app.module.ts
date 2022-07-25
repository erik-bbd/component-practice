import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FormsModule } from '@angular/forms';
import { FoodServiceService } from './food-service.service';
import { FoodDetailsEditorComponent } from './food-details-editor/food-details-editor.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    FoodDetailsComponent,
    FoodDetailsEditorComponent,
    FoodAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
