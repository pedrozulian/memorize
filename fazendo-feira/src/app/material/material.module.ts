import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const material = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
