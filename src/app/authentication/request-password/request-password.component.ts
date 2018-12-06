import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.css']
})
export class RequestPasswordComponent implements OnInit {
  errors: ''
  constructor(public authService: AuthenticationService) { }
  
  ngOnInit() {
  }
  /**
   * 
   * @param requestForm 
   */
  async request(requestForm) {
    try {
      if (requestForm.valid) {
        let body = requestForm.value;
        await this.authService.request(body) as any;
      }
    } catch (error) {
      this.errors = error.error.message;
      console.log(this.errors);
      requestForm.controls.email.setErrors({ server: error.error.message });
    }
  }
}