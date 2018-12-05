import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  error: '';
  admin = [];


  constructor( public adminService: AdminService, public router: Router, 
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams =>{
      this.getAdmin();
    })
  }

  async addAdmin(adminForm){
    try {
      let body = adminForm.value
      let response  = await this.adminService.add(body) as any;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    if (adminForm.valid) {
      let body = adminForm.value;
      console.log(body);
    }
    
  }

  async getAdmin(){
    try {
      let response = await this.adminService.getAllAdmin() as any;
      this.admin = response;
    } catch (error) {
      
    }
  }
}