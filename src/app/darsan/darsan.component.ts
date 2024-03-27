import { Component } from '@angular/core';
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
  darshanTypes = ['Type1', 'Type2'];
  selectedValue:any = 0;

  constructor(private appComponent:AppComponent, private router:Router,private formBuilder:FormBuilder){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }

  }

  darshanBooking = this.formBuilder.group({
    templeName : new FormControl(0)
  });

  dropDownChange(){
    this.selectedValue = this.darshanBooking.value.templeName;
  }

}
