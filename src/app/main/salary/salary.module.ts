import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary/salary.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'salary',
    component:SalaryComponent
  }
]

@NgModule({
  declarations: [SalaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SalaryModule { }
