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
  templeNames:any;
  darshanTypes:any;
  selectedValue:any = 0;
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
    darshanType: new FormControl('none'),
    bookingType: new FormControl(),
    gothram: new FormControl()
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
    this.darshan.getlistbyid(this.selectedValue).subscribe((result)=>{
      console.warn(result);
      this.darshanTypes = result;
    });
  }

  OnSubmit(){
    console.log(this.darshanBooking.value);


    this.booking.saveBooking(this.darshanBooking.value).subscribe((result)=>{
      console.warn("result is here",result);
    })
  }

}
