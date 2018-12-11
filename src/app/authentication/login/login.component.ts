import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import swal from 'sweetalert';
import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
error='';
email: any;
  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  /**
   * Logs in the system
   * @param loginForm 
   */
  async login(loginForm){
    if (loginForm.valid) {
      let body = loginForm.value;
      try {
        let response = await this.authService.login(body) as any;
      } catch (error) { 
         loginForm.controls.email.setErrors({server: error.error.message});
         
         
      }
    }
  }
}