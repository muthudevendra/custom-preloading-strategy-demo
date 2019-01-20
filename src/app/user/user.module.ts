import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    UserListComponent
  ],
  providers: [ UserService ]
})
export class UserModule {
  constructor() {
    console.log('UserModule loaded.');
  }
}
