import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-preloading';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: '../app/user/user.module#UserModule',
    data: { preload: true }
  },
  {
    path: 'product',
    loadChildren: '../app/product/product.module#ProductModule',
    data: { preload: true, delay: true }
  },
  {
    path: 'shopping-cart',
    loadChildren: '../app/shopping-cart/shopping-cart.module#ShoppingCartModule',
    data: { preload: true, delay: true }
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: CustomPreloadingStrategy
      })
  ],
  providers: [ CustomPreloadingStrategy ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
