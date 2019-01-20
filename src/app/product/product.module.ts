import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  providers: [ ]
})
export class ProductModule {
  constructor() {
    console.log('ProductModule loaded.');
  }
}
