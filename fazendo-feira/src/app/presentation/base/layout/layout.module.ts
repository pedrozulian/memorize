import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { MaterialModule } from '../../../material/material.module';
import { SignInComponent } from '../dialog/components/sign-in/sign-in.component';
import { SignUpComponent } from '../dialog/components/sign-up/sign-up.component';

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
