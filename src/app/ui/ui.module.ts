import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  exports: [HeaderComponent,SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UiModule { }