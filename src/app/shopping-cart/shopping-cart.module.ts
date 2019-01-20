import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShoppingCartRoutingModule
  ],
  declarations: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule {
  constructor() {
    console.log('ShoppingCartModule loaded.');
  }
}
