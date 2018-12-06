import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent,FooterComponent],
  exports: [HeaderComponent,SidebarComponent,FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UiModule { }