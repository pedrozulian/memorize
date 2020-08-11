import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Module of Base */
import { BaseModule } from './base/base.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BaseModule,
  ],
  exports: [
    BaseModule,
  ]
})
export class PresentationModule { }
