import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  

  constructor(public httpClient: HttpClient, public router: Router, public activatedRoute: ActivatedRoute) { }

  getAllEmployee(limit , skip){
    return this.httpClient.get(`${environment.apiBase}/admin/employer?limit=${limit}&skip=${skip}`).toPromise();
  }

  deleteEmployer(id){
    return this.httpClient.delete(`${environment.apiBase}/admin/employer?id=${id}`).toPromise();
  }
}