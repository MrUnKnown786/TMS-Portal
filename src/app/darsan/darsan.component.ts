import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-darsan',
  templateUrl: './darsan.component.html',
  styleUrls: ['./darsan.component.css']
})
export class DarsanComponent {

  templeNames = ['Temple1', 'Temple2', 'Temple3'];
  darshanTypes = ['Type1', 'Type2', 'Type3'];
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
    darshanType: new FormControl()

  });

  constructor(private appComponent:AppComponent, private router:Router,private formBuilder:FormBuilder){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }

  }



  dropDownChange(){
    this.selectedValue = this.darshanBooking.value.templeName;
  }

  OnSubmit(){
    console.log(this.darshanBooking.value);
  }
}
