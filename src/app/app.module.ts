import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { InputComponent } from './shared/components/input/input.component';
import { todoComponent } from './shared/components/todos/todo.component';
import { todoComponents } from './shared/components/todo1/todos.component';
import { planetComponent,} from './shared/components/planet/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    todoComponent,
    todoComponents,
    planetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






