import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  error: '';
  limit = 5;
  skip = 0;
  employee= [];
  total : any;
  totalPages : any;
  totalNumbers = [];
  page : any = 1 ;
  employers = [];
  q;

/**
 * 
 * @param employeeService 
 * @param activatedRoute 
 * @param router 
 */
  constructor(public employeeService: EmployerService, public activatedRoute: ActivatedRoute, public router: Router) { }
  
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams =>{
      this.page = queryParams.page || 1;
      this.q = queryParams.keyword || '';
      this.getEmployer(this.q);
    })
  }
  ​
  /**
   * Method get all employer from database
   * @param q 
   */
  async getEmployer(q) {
    try {
      let response = await this.employeeService.getAllEmployee(this.q, this.limit, this.skip ,this.page) as any;
      this.employers = response.employers;
      this.total = response.total;
      //pagination//
      this.totalPages = Math.ceil(this.total / this.limit);
      this.totalNumbers = [];
      for (let index = 0; index < this.totalPages; index++) {
        this.totalNumbers.push(index + 1);
      }
      this.router.navigate(['/employer'], { queryParams: { page: this.page } });
    }
    catch (error) {
      console.log(error);
    }
  }

    
    /**
     * Method of Change Pages On Number Click
     * @param pageNumber query params
     */
    async nextPage(pageNumber) {
      let q = this.activatedRoute.snapshot.queryParams['q'];
      this.skip = (pageNumber - 1) * this.limit;
      this.router.navigate(['/employer'], { queryParams: { q: q, page: pageNumber } });
    }
  
  
    /**Method for Go to Pervious Page */
  
    async prePageButton() {
      if (parseInt(this.page) > 1) {
        let pageNumber = parseInt(this.activatedRoute.snapshot.queryParams['page']) - 1;
        let q = this.activatedRoute.snapshot.queryParams['q'];
        this.skip = (pageNumber - 1) * this.limit;
        this.router.navigate(['/employer'], { queryParams: { q: q, page: pageNumber } });
      }
    }
  
    /**Method for Go to Next Page */
      async nextPageButton() {
      if (parseInt(this.page) < this.totalPages) {
        let pageNumber = parseInt(this.activatedRoute.snapshot.queryParams['page']) + 1;
        let q = this.activatedRoute.snapshot.queryParams['q'];
        this.skip = (pageNumber - 1) * this.limit;
        this.router.navigate(['/employer'], { queryParams: { q: q, page: pageNumber } });
      }
    }

}
