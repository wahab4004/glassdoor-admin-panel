import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import {RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'user',
    component:UsercomponentComponent
  }
]

@NgModule({
  declarations: [UsercomponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsermoduleModule { }
