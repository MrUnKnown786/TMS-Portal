import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent {

  constructor(private appComponent:AppComponent, private router:Router){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }
  }

}
