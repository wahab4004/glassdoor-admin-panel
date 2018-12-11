import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public httpClient: HttpClient, public router: Router, public activatedRouter: ActivatedRoute) { }

  /**
   * Service for add admins
   * @param f 
   */
  add(f) {
    return this.httpClient.post(`${environment.apiBase}/add-admin`, f).toPromise();
  }
  /**
   * Service for get all admins
   */
  getAllAdmin() {
    return this.httpClient.get(`${environment.apiBase}/admin`).toPromise();
  }
  /**
   * Service for delete admin
   * @param id 
   */
  deleteAdmin(id) {
    return this.httpClient.delete(`${environment.apiBase}/admin?id=${id}`).toPromise();
  }
}