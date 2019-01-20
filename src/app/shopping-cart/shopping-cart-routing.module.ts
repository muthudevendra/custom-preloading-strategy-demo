import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';

const productRoutes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(productRoutes) ],
  exports: [ RouterModule ]
})
export class ShoppingCartRoutingModule { }
