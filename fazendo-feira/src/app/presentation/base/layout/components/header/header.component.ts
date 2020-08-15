import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../../../dialog/components/sign-in/sign-in.component';
import { SignUpComponent } from '../../../dialog/components/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogSignIn() {
    this.dialog.open(SignInComponent);
  }

  openDialogSignUp() {
    this.dialog.open(SignUpComponent);
  }

}
