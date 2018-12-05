import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';



const routes: Routes = [
  {
    path:'',
    component:BlankComponent
    
  },

]

@NgModule({
  declarations: [BlankComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
