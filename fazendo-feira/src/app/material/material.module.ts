import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

const material = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatMenuModule,
  MatDividerModule,
  MatInputModule,
  MatGridListModule,
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
