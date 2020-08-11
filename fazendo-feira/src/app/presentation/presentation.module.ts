import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

/* Module of Base */
import { BaseModule } from './base/base.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BaseModule,
    MaterialModule,
  ],
  exports: [
    BaseModule,
  ]
})
export class PresentationModule { }
