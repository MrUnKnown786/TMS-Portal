import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TMS-Portal';
  isLoggedIn = false;
  userName:any;

  constructor() {
    
    if(localStorage.getItem("isLoggedIn")){
      this.isLoggedIn = true;
      this.userName = localStorage.getItem("userName");
    }
  }

  LogOut(){
    localStorage.clear();
    this.isLoggedIn = false;
    location.reload();
  }
}
