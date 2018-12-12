import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(public httpClient: HttpClient, public router: Router, public activatedRoute: ActivatedRoute) { }

  getSalary(limit,skip){
    return this.httpClient.get(`${environment.apiBase}/search/salary?employerName=null&jobTitle=null&period=null&limit=${limit}&skip=${skip}`).toPromise();
  }

}
