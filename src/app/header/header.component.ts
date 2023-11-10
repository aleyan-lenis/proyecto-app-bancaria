import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { DialogModule } from '@angular/cdk/dialog';
import { FormTransactionComponent } from '../form-transaction/form-transaction.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog, private router: Router, private shared:SharedService){}

  isLoggedIn = false;
  userName: string = '';

  openDialogTransaction(){
     this.dialog.open(FormTransactionComponent,{
        width:"auto",
        height:"auto"
     })
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.isLoggedIn = true;
        // this.userName = '';
        this.userName = this.shared.getMessage();
      }
    });
  }

  logout() {
    this.isLoggedIn = false;
    this.userName = '';
    this.router.navigate(['/mainPage']);
  }
}
