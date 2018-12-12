import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor( public httpClient: HttpClient , public router: Router , public activatedRoute: ActivatedRoute  ) { }

  getInterview(limit,skip){   
    return this.httpClient.get(`${environment.apiBase}/search/interview?employerName=null&jobTitle=null&receivedOffer=null&limit=${limit}&skip=${skip}`).toPromise();
  }

}
