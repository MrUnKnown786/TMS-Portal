import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sevas',
  templateUrl: './sevas.component.html',
  styleUrls: ['./sevas.component.css']
})
export class SevasComponent {

  minDate = new Date();
  maxDate = new Date();

  templeNames = ['Temple1', 'Temple2', 'Temple3'];
  sevaTypes = ['Type1', 'Type2', 'Type3'];
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
    sevaType: new FormControl('none'),
    gothram: new FormControl()

  });

  constructor(private appComponent:AppComponent, private router:Router,private formBuilder:FormBuilder){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }

    this.minDate.setDate(this.minDate.getDate() + 1);
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 13)

  }

  dropDownChange(){
    this.selectedValue = this.darshanBooking.value.templeName;
  }

  OnSubmit(){
    console.log(this.darshanBooking.value);
  }

}
