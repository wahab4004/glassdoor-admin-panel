import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  error:'';
  limit = 5;
  skip = 0;
  employerReviews = [];
  total: any;
  totalPages: any;
  totalNumbers = [];
  page : any = 1;
  q;

  constructor(public reviewService: ReviewService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams =>{
      this.page = queryParams.page || 1;
      this.getReview(this.q);
    })
  }

  async getReview(q){
   try {
     let response = (await this.reviewService.getReview(this.limit, this.skip)) as any;
     this.employerReviews =  response.employerReviews;
     this.total = response.total;
     this.totalPages = Math.ceil(this.total / this.limit)
     this.totalNumbers = [];
     for(let index = 0 ; index < this.totalPages ; index++){
       this.totalNumbers.push(index + 1);
     }
     this.router.navigate(['/review'], {queryParams: {page: this.page}})
     
     } catch (error) {
     console.log(error)
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
    this.router.navigate(['/review'], { queryParams: { q: q, page: pageNumber } });
  }

  /**Method for Go to pervious page */
  async prePageButton() {
    if (parseInt(this.page) > 1) {
      let pageNumber = parseInt(this.activatedRoute.snapshot.queryParams['page']) - 1;

      let q = this.activatedRoute.snapshot.queryParams['q'];
      this.skip = (pageNumber - 1) * this.limit;
      this.router.navigate(['/review'], { queryParams: { q: q, page: pageNumber } });
    }
  }

  /**Method for Go to next page */
  async nextPageButton() {
    if (parseInt(this.page) < this.totalPages) {
      let pageNumber = parseInt(this.activatedRoute.snapshot.queryParams['page']) + 1;
      let q = this.activatedRoute.snapshot.queryParams['q'];
      this.skip = (pageNumber - 1) * this.limit;
      this.router.navigate(['/review'], { queryParams: { q: q, page: pageNumber } });
    }
  }

}
