import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
error='';
  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  /**
   * Logs in the system
   * @param loginForm 
   */
  async login(loginForm : NgForm){
    if (loginForm.valid) {
      let body = loginForm.value;
      try {
        let response = await this.authService.login(body) as any;
      } catch (error) { 
         console.log(error.error.message);
         loginForm.controls.email.setErrors({server: error.error.message});
      }
    }
  }
}