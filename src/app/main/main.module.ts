import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { UiModule } from '../ui/ui.module';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'',
        loadChildren:'./dashboard/dashboard.module#DashboardModule',
        canActivate : [AuthGuard]
      },
      {
        path:'',
        loadChildren:'./usermodule/usermodule.module#UsermoduleModule'
      },
      {
        path:'',
        loadChildren:'./employermodule/employermodule.module#EmployermoduleModule'
      },
      {
        path:'',
        loadChildren:'./admin-module/admin-module.module#AdminModuleModule'
      },
      {
        path:'',
        loadChildren:'./review/review.module#ReviewModule'
      },
      {
        path:'',
        loadChildren:'./salary/salary.module#SalaryModule'
      },
      {
        path:'',
        loadChildren:'./interview/interview.module#InterviewModule'
      }
    ]
  }
]
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }