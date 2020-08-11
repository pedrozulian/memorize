import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Module of Users */
import { UsersModule } from './users/users.module'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersModule,
  ],
  exports: [
    UsersModule,
  ]
})
export class BaseModule { }
