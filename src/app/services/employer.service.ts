import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  

  constructor(public httpClient: HttpClient, public router: Router, public activatedRoute: ActivatedRoute) { }


  getAllEmployee(q, limit, skip , page){
    return this.httpClient.get(`${environment.apiBase}/search-employer?q=${q}&limit=${limit}&skip=${skip}&page=${page}`).toPromise();
  }

}