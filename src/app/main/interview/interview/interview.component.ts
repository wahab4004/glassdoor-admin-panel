import { Component, OnInit } from '@angular/core';
import { InterviewService } from 'src/app/services/interview.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
 error:'';
 interviews = [];
 limit = 10;
 skip = 0;
 total: any;
 totalPages: any;
 totalNumbers = [];
 page : any = 1;
 q;

  constructor( public interviewService: InterviewService, public activatedRoute: ActivatedRoute, public router: Router ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryparams =>{
      this.page = queryparams.page || 1;
      this.getInterview(this.q);
    })
  }

  async getInterview(q){
    try {
      let response = await this.interviewService.getInterview(this.limit,this.skip) as any;
      this.interviews = response.interviews;
      // Pagination
      this.total = response.total;
      this.totalPages = Math.ceil(this.total / this.limit)
      this.totalNumbers = [];
      for(let index = 0; index < this.totalPages; index++) {
        this.totalNumbers.push(index + 1);
      }
      this.router.navigate(['/interview'], { queryParams: { page: this.page } })
    } catch (error) {
      console.log(error);
    }
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
    this.router.navigate(['/interview'], { queryParams: { q: q, page: pageNumber } });
  }

  /**Method for Go to pervious page */
  async prePageButton() {
    if (parseInt(this.page) > 1) {
      let pageNumber = parseInt(this.activatedRoute.snapshot.queryParams['page']) - 1;

      let q = this.activatedRoute.snapshot.queryParams['q'];
      this.skip = (pageNumber - 1) * this.limit;
      this.router.navigate(['/interview'], { queryParams: { q: q, page: pageNumber } });
    }
  }

  /**Method for Go to next page */
  async nextPageButton() {
    if (parseInt(this.page) < this.totalPages) {
      let pageNumber = parseInt(this.activatedRoute.snapshot.queryParams['page']) + 1;
      let q = this.activatedRoute.snapshot.queryParams['q'];
      this.skip = (pageNumber - 1) * this.limit;
      this.router.navigate(['/interview'], { queryParams: { q: q, page: pageNumber } });
    }
  }

}
