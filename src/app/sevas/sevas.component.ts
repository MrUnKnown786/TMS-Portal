import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { TempleService } from '../temple.service';
import { SevaService } from '../seva.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-sevas',
  templateUrl: './sevas.component.html',
  styleUrls: ['./sevas.component.css']
})
export class SevasComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date();

  templeNames:any;
  sevaTypes:any;
  selectedValue:any = 0;
  sevaBooking = this.formBuilder.group({
    templeName : new FormControl(0),
    date: new FormControl(),
    numberofpersons: new FormControl(1),
    mobile: new FormControl(),
    name: new FormControl(),
    dob: new FormControl(),
    gender: new FormControl('none'),
    idtype: new FormControl('none'),
    idnumber: new FormControl(),
    sevaType: new FormControl('none'),
    gothram: new FormControl(),
    bookingType: new FormControl('Seva')

  });

  constructor(private appComponent:AppComponent, private router:Router,private formBuilder:FormBuilder, private temple:TempleService, private seva:SevaService, private booking:BookingService){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }

    this.minDate.setDate(this.minDate.getDate() + 1);
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 13)

  }

  ngOnInit(): void {
    this.temple.getList().subscribe((result)=>{
      console.warn(result)
      this.templeNames = result;
    });
  }

  dropDownChange(){
    this.selectedValue = this.sevaBooking.value.templeName;
    if(this.selectedValue == 0){
      this.sevaTypes = [];
      return;
    }
    this.seva.getlistbyid(this.selectedValue).subscribe((result)=>{
      console.warn(result);
      this.sevaTypes = result;
    });
  }

  OnSubmit(){
    console.log(this.sevaBooking.value);


    this.booking.saveBooking(this.sevaBooking.value).subscribe((result)=>{
      console.warn("result is here",result);
      this.router.navigate(['booking-confirmation']);
    })
  }

}
