import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class DialogModule { }
