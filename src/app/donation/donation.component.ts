import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {

  constructor(private appComponent:AppComponent, private router:Router){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }

  }

}
