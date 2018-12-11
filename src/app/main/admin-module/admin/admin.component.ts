import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  error: '';
  admin = [];

  /**
   * 
   * @param adminService 
   * @param router 
   * @param activatedRoute 
   */
  constructor(public adminService: AdminService, public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.getAdmin();
    })
  }

  /**
   * Method for add admin
   * @param adminForm 
   */
  async addAdmin(adminForm) {
    try {
      let body = adminForm.value
      let response = await this.adminService.add(body) as any;
    } catch (error) {
      // console.log(error.error.message);
      adminForm.controls.email.setErrors({ server: error.error.message })
    }
    if (adminForm.valid) {
      let body = adminForm.value;
      swal({
        title: "Added",
        icon: "success",
      })
      await this.getAdmin()
    }
  }
  /**
   * Method to get all admins
   */
  async getAdmin() {
    try {
      let response = await this.adminService.getAllAdmin() as any;
      this.admin = response;
    } catch (error) {
    }
  }
  /**
   * Method to delete admin
   * @param id 
   */
  async delete(id) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      buttons: (<any>true),
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          let response = this.adminService.deleteAdmin(id) as any;
          this.admin = this.admin.filter(x => x._id != id)
        }
      })
  }
}