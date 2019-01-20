import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'product-list',
        component: ProductListComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(productRoutes) ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule { }
