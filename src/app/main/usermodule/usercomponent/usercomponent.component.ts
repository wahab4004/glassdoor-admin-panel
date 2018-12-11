import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {
  error: '';
  limit = 5;
  skip = 0;
  users = [];
  total: any;
  totalPages: any;
  totalNumbers = [];
  page: any = 1;
  user = [];
  q;
  selectedRow = {
    username:'',
    email:'',
    company:'',
    phone:'',
    city:'',
    country:'',
    state:'',
    dateOfBirth:'',
    experience:'',
    addressLine1:''
  }

  /**
   * 
   * @param userService 
   * @param activatedRoute 
   * @param router 
   */
  constructor(public userService: UserService, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryparams => {
      this.page = queryparams.page || 1;
      this.getUser(this.q);
    })
  }

  async addUser(userForm){
    if(userForm.valid){
      let body = userForm.value;
      console.log(body)

    }
  }

  selectedData(value){
    // console.log(value)
    this.selectedRow = value;
  }
  
  /**
   * Method Get all user from database
   * @param q query parameter 
   */
  async getUser(q) {
    try {
      let response = await this.userService.getAllUser(this.limit, this.skip) as any;
      this.users = response.users;
      /**pagination */
      this.total = response.total;
      this.totalPages = Math.ceil(this.total / this.limit);
      this.totalNumbers = [];
      for (let index = 0; index < this.totalPages; index++) {
        this.totalNumbers.push(index + 1);
      }
      this.router.navigate(['/user'], { queryParams: { page: this.page } })
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Method for delete user 
   * @param id query parameter
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
          let response = this.userService.deleteUser(id) as any;
          this.users = this.users.filter(x => x._id != id);
        }
      });
  }


  /**
   * Method Change pages on number click
   * @param pageNumber query params
   */
  async nextPage(pageNumber) {
    let q = this.activatedRoute.snapshot.queryParams['q'];
    this.skip = (pageNumber - 1) * this.limit;
    this.router.navigate(['/user'], { queryParams: { q: q, page: pageNumber } });
  }

  /**Method for Go to pervious page */
  async prePageButton() {
    if (parseInt(this.page) > 1) {
      let pageNumber = parseInt(this.activatedRoute.snapshot.queryParams['page']) - 1;

      let q = this.activatedRoute.snapshot.queryParams['q'];
      this.skip = (pageNumber - 1) * this.limit;
      this.router.navigate(['/user'], { queryParams: { q: q, page: pageNumber } });
    }
  }

  /**Method for Go to next page */
  async nextPageButton() {
    if (parseInt(this.page) < this.totalPages) {
      let pageNumber = parseInt(this.activatedRoute.snapshot.queryParams['page']) + 1;
      let q = this.activatedRoute.snapshot.queryParams['q'];
      this.skip = (pageNumber - 1) * this.limit;
      this.router.navigate(['/user'], { queryParams: { q: q, page: pageNumber } });
    }
  }
}