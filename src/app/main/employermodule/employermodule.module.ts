import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './employer/employer.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'employer',
    component:EmployerComponent
  }
]

@NgModule({
  declarations: [EmployerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployermoduleModule { }
