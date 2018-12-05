import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  
  @ViewChild('resetForm') resetForm: NgForm
  error = false;
  errorMessage: '';
  
  constructor(public authService: AuthenticationService, public activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
  }
  
  async resetPassword(resetForm) {
    try {
      if (resetForm.valid) {
        let body = resetForm.value;
        body.token = this.activatedRoute.snapshot.queryParams['token'];
        if (resetForm.value.password != resetForm.value.confirmPassword) {
          this.error = true;
        }
        else {
          this.error = false;
          await this.authService.reset(body);
        }
      }
    } catch (error) {
      console.log(error);
    }

  }
}