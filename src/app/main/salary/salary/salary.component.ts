import { Component, OnInit } from '@angular/core';
import { SalaryService } from 'src/app/services/salary.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  error:'';
  limit = 10;
  skip = 0;
  salaries = [];
  total: any;
  totalPages: any;
  totalNumbers = [];
  page: any = 1;
  q;

  constructor(public salaryService: SalaryService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams =>{
      this.page = queryParams.page || 1;
      this.getSalary(this.q)
    })
  }

  async getSalary(q){
    let response = await this.salaryService.getSalary(this.limit, this.skip) as any
    this.salaries = response.salaries;
    this.total = response.total;
    this.totalPages = Math.ceil(this.total / this.limit)
    this.totalNumbers = [];
    for(let index = 0; index < this.totalPages; index++){
     this.totalNumbers.push(index + 1);
    }
      this.router.navigate(['/salary'], {queryParams: {page: this.page}})
  }

  async delete() {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      buttons: (<any>true),
      dangerMode: true,
    })
  }

  /**
   * Method Change pages on number click
   * @param pageNumber query params
   */
  async nextPage(pageNumber) {
    let q = this.activatedRoute.snapshot.queryParams['q'];
    this.skip = (pageNumber - 1) * this.limit;
    this.router.navigate(['/salary'], { queryParams: { q: q, page: pageNumber } });
  }

  /**Method for Go to pervious page */
  async prePageButton() {
    if (parseInt(this.page) > 1) {
      let pageNumber = parseInt(this.activatedRoute.snapshot.queryParams['page']) - 1;

      let q = this.activatedRoute.snapshot.queryParams['q'];
      this.skip = (pageNumber - 1) * this.limit;
      this.router.navigate(['/salary'], { queryParams: { q: q, page: pageNumber } });
    }
  }

  /**Method for Go to next page */
  async nextPageButton() {
    if (parseInt(this.page) < this.totalPages) {
      let pageNumber = parseInt(this.activatedRoute.snapshot.queryParams['page']) + 1;
      let q = this.activatedRoute.snapshot.queryParams['q'];
      this.skip = (pageNumber - 1) * this.limit;
      this.router.navigate(['/salary'], { queryParams: { q: q, page: pageNumber } });
    }
  }

}
