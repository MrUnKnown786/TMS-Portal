import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-success',
  templateUrl: './donation-success.component.html',
  styleUrls: ['./donation-success.component.css']
})
export class DonationSuccessComponent {


  constructor(private appComponent:AppComponent, private router:Router){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }
  }

}
