import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient, public router: Router, public activatedRoute: ActivatedRoute) { }

  getAllUser(limit , skip){
    return this.httpClient.get(`${environment.apiBase}/admin/user?limit=${limit}&skip=${skip}`).toPromise();
  }

  deleteUser(id){
    return this.httpClient.delete(`${environment.apiBase}/admin/user?id=${id}`).toPromise();
  }


}
