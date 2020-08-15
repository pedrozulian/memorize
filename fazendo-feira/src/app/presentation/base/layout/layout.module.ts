import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { MaterialModule } from '../../../material/material.module';
import { SignInComponent } from '../dialog/sign-in/sign-in.component';
import { SignUpComponent } from '../dialog/sign-up/sign-up.component';

@NgModule({
  declarations: [HeaderComponent],
  entryComponents: [
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class LayoutModule { }
