import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  admin: {
    _id: '',
    name: '',
    email: '',
    password: '',
    status: '',
  }
  constructor(public httpClient: HttpClient, public router: Router, public activtedRoute:
    ActivatedRoute) { }

  /**
   * Service for login
   * @param f 
   */
  async login(f) {
    let response = await this.httpClient.post(`${environment.apiBase}/admin/login`, f).toPromise();
    localStorage.setItem('token', `${(response as any).authToken}`);
    if ((<any>response).authToken) {
      this.router.navigate(['/']);
      await this.getProfile();
    }
  }

  /**
   * Service for get profile
   */
  async getProfile() {
    try {
      let token = localStorage.getItem('token')
      if (token) {
        let response = await this.httpClient.get(`${environment.apiBase}/admin/profile?authToken=${token}`).toPromise();
        this.admin = (response as any).admin;
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  /**
   * Service for reset password
   * @param f 
   */
  async reset(f) {
    try {
      let response = await this.httpClient.post(`${environment.apiBase}/admin/reset-password`, f).toPromise();
      this.router.navigate(['/login']);
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Service for request password
   * @param body 
   */
  async request(body) {
    let response = await this.httpClient.post(`${environment.apiBase}/admin/request-password`, body).toPromise();
    return response;
  }

  /**
   * Service for loggedin
   */
  async isloggedin() {
    try {
      let body = { authToken: localStorage.getItem('token') };
      let response = await this.httpClient.post(`${environment.apiBase}/admin/login/check`, body).toPromise();
      if ((<any>response).authenticated) {
        await this.getProfile();
        return true;
      }
      else {
        return false;
      }
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Service for logout
   */
  async logout() {
    await this.getProfile();
    try {
      await this.httpClient.get(`${environment.apiBase}/admin/logout/${this.admin._id}`).toPromise();
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    } catch (error) {
      console.log(error)
    }
  }
}