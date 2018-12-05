import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './blank/blank.component';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:BlankComponent
  }
]

@NgModule({
  declarations: [BlankComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlankModule { }
