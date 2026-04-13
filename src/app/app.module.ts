import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
