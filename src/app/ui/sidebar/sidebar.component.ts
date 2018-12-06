import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
declare const $ : any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  name : '';
  constructor(public authService: AuthenticationService) { }

   async ngOnInit() {
    await this.authService.getProfile()
    this.name = this.authService.admin.name;
    // console.log(this.name);
    
    $(document).ready(function() {
      $('.sidebar-menu').tree()
    });
  }
}
