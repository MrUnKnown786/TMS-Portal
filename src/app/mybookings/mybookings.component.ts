import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  constructor(private appComponent:AppComponent, private router:Router, private booking:BookingService, private donation:DonationService){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }
  }

  darshanBookings:any = [];
  sevaBookings:any = [];
  donations:any = []

  ngOnInit(): void{
    this.booking.getbookingbytype("Darshan").subscribe((result) => {
      this.darshanBookings = result;
    });

    this.booking.getbookingbytype("Seva").subscribe((result) => {
      this.sevaBookings = result;
    });

    this.donation.getDonations().subscribe((result)=>{
      this.donations = result
    });
  }

}
