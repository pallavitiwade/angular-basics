import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { InputComponent } from './shared/components/input/input.component';
import { todoComponent } from './shared/components/todos/todo.component';
import { todoComponents } from './shared/components/todo1/todos.component';
import { planetComponent,} from './shared/components/planet/planet.component';
import { CardComponent } from './shared/components/card/card.component';
import { FoodComponent } from './shared/components/food menus/food.component';
import { MovieComponent } from './shared/components/movie/movie.component';
import { StudentComponent } from './shared/components/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';







@NgModule({
  declarations: [
    AppComponent,
    todoComponent,
    todoComponents,
    planetComponent,
    CardComponent,
    FoodComponent,
    MovieComponent,
    StudentComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






