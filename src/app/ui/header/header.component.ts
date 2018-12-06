import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name : any;
  constructor(public authService: AuthenticationService) { }


  async ngOnInit() {
    await this.authService.getProfile();
    this.name = this.authService.admin.name;
    // console.log(this.name);
    
  }

}
