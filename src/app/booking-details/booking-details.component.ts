import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { TempleService } from '../temple.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  path:any;
  data:any = [];
  templeName: any;
  date:any;
  numberofpersons:any;
  mobile: any;
  name: any;
  dob: any;
  gender: any;
  idtype: any;
  idnumber: any;
  type: any;
  gothram: any;
  bookingType: any;
  address: any;
  amount: any;
  time:any;

  img:any;
  templeData:any = [];

  seva = false;

  constructor(private appComponent:AppComponent, private router:Router, private route:ActivatedRoute, private booking:BookingService, private temple:TempleService){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }

    this.path = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    
    this.booking.getBookingById(this.path).subscribe((result)=>{
      this.data = result;

      this.templeName = this.data[0].templeName;
      this.date = this.data[0].date;
      this.numberofpersons = this.data[0].numberofpersons;
      this.mobile = this.data[0].mobile;
      this.name = this.data[0].name;
      this.dob = this.data[0].dob;
      this.gender = this.data[0].gender;
      this.idtype = this.data[0].idtype;
      this.idnumber = this.data[0].idnumber;
      this.bookingType = this.data[0].bookingType;

      if(this.bookingType == "Seva"){
        this.type = this.data[0].sevaType;
        this.seva = true;
      }
      else{
        this.type = this.data[0].darshanType;
      }

      this.gothram = this.data[0].gothram;
      this.address = this.data[0].address;
      this.amount = this.data[0].amount;
      this.time = this.data[0].time;


      this.temple.getTempleByName(this.templeName).subscribe((result)=>{
        this.templeData = result;
        this.img = this.templeData[0].imgPath;
      });

    });

  }


}
