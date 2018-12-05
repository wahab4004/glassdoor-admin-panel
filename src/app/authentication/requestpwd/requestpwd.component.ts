import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-requestpwd',
  templateUrl: './requestpwd.component.html',
  styleUrls: ['./requestpwd.component.css']
})
export class RequestpwdComponent implements OnInit {

  constructor(public authService : AuthenticationService) { }

  ngOnInit() {
  }

  async request(requestForm){
    try {
      if(requestForm.valid){
        let response = await this.authService.request(requestForm.value) as any;
        console.log(response);
      }
    } catch (error) {
      console.log(error); 
    }
  }

  // request(requestForm){
  //   if(requestForm.valid){
  //     let body = requestForm.value;
  //     console.log(body);
      
  //   }
  // }

  

}
