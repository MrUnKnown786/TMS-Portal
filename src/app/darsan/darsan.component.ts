import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { TempleService } from '../temple.service';
import { DarshanService } from '../darshan.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-darsan',
  templateUrl: './darsan.component.html',
  styleUrls: ['./darsan.component.css']
})
export class DarsanComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date();
  list:any;
  templeNames:any = [];
  darshanTypes:any = [];
  selectedValue:any = 0;
  typeValue:any = 0;
  numbers:any = 0;
  darshanBooking = this.formBuilder.group({
    templeName : new FormControl(0),
    date: new FormControl(),
    numberofpersons: new FormControl(1),
    mobile: new FormControl(),
    name: new FormControl(),
    dob: new FormControl(),
    gender: new FormControl('none'),
    idtype: new FormControl('none'),
    idnumber: new FormControl(),
    darshanType: new FormControl('0'),
    bookingType: new FormControl('Darshan'),
    gothram: new FormControl(),
    userId: new FormControl(localStorage.getItem("userId")),
    time: new FormControl(),
    address: new FormControl(),
    amount: new FormControl()
  });

  constructor(private appComponent:AppComponent, private router:Router,private formBuilder:FormBuilder, private temple:TempleService, private darshan:DarshanService, private booking:BookingService){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }

    this.minDate.setDate(this.minDate.getDate() + 1);
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 13);
  }

  ngOnInit(): void {
    this.temple.getList().subscribe((result)=>{
      console.warn(result)
      this.templeNames = result;
    });
  }
  

  dropDownChange(){
    this.selectedValue = this.darshanBooking.value.templeName;
    if(this.selectedValue == 0){
      this.darshanTypes = [];
      return;
    }
    let id = this.templeNames[this.selectedValue-1].id;

    this.darshan.getlistbyid(id).subscribe((result)=>{
      console.warn(result);
      this.darshanTypes = result;
    });
  }

  OnSubmit(){
    console.log(this.darshanBooking.value);

    this.typeValue = this.darshanBooking.value.darshanType;
    this.darshanBooking.value.darshanType = this.darshanTypes[this.typeValue].darshanName;
    this.darshanBooking.value.time = this.darshanTypes[this.typeValue].time;

    this.darshanBooking.value.templeName = this.templeNames[this.selectedValue-1].templeName;
    this.darshanBooking.value.address = this.templeNames[this.selectedValue-1].address;

    this.numbers = this.darshanBooking.value.numberofpersons;
    this.darshanBooking.value.amount = String(Number(this.darshanTypes[this.typeValue].amount) * Number(this.numbers));

    this.booking.saveBooking(this.darshanBooking.value).subscribe((result)=>{
      console.warn("result is here",result);
      this.router.navigate(['booking-confirmation']);
    })
  }

}
