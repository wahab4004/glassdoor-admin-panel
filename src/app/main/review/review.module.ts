import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'review',
    component:ReviewComponent
  }
]

@NgModule({
  declarations: [ReviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReviewModule { }
