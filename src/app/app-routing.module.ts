import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';

const routes: Routes = [
  {path: '', component: InitialPageComponent},
  {path: 'initialPage', component: InitialPageComponent},
  {path: 'mainPage', component: MainComponent},
  {path: 'transactionPage', component: TransactionPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule, ReactiveFormsModule]
})
export class AppRoutingModule { }
