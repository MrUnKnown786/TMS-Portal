import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {

  constructor(private appComponent:AppComponent, private router:Router){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }
  }

}
