import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {
@ViewChild ('resetForm') resetForm: NgForm
error='';

 constructor(public authService: AuthenticationService, public activatedRoute : ActivatedRoute) { }

ngOnInit() {
  }

  async resetPassword(resetForm : NgForm){
    try {
      if(resetForm.value.password != resetForm.value.confirmPassword){
        this.error = 'password must match'
      }
      else{
        let token =   this.activatedRoute.snapshot.queryParams['token'];
        let body = resetForm.value;
        body.token = token;
        console.log(body);
        
        let response = await this.authService.reset(body) as any;
        console.log(response);
        
      }
    } catch (error) {
      console.log(error)
    }
  }

}
