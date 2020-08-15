import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { MaterialModule } from '../../../material/material.module';
import { SignInComponent } from '../dialog/sign-in/sign-in.component';

@NgModule({
  declarations: [HeaderComponent],
  entryComponents: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class LayoutModule { }
