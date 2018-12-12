import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(public httpClient: HttpClient , public activatedRoute: ActivatedRoute , public router: Router ) { }

  getReview(limit,skip){
    return this.httpClient.get(`${environment.apiBase}/search/review?employerName=null&reviewTitle=null&jobType=null&limit=${limit}&skip=${skip}`).toPromise();
  }
}
