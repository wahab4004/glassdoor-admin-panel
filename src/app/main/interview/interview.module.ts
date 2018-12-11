import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewComponent } from './interview/interview.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'interview',
    component:InterviewComponent
  }
]

@NgModule({
  declarations: [InterviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InterviewModule { }
