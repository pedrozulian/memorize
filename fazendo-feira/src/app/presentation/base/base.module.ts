import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Module of Users */
import { UsersModule } from './users/users.module';

/* Module of Layout */
import { LayoutModule } from './layout/layout.module';

/* Module of Dialog */
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersModule,
    LayoutModule,
    DialogModule,
  ],
  exports: [
    UsersModule,
  ]
})
export class BaseModule { }
