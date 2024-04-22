import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { TempleService } from '../temple.service';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  maxDate = new Date();
  templeNames:any = [];
  selectedValue:any = 0;
  donationForm = this.formBuilder.group({
    templeName : new FormControl(0),
    name: new FormControl(),
    dob: new FormControl(),
    gender: new FormControl('none'),
    userId: new FormControl(localStorage.getItem("userId")),
    date: new FormControl(Date()),
    amount: new FormControl()
  });

  constructor(private appComponent:AppComponent, private router:Router, private formBuilder: FormBuilder, private temple:TempleService, private donation: DonationService){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }

    this.maxDate.setFullYear(this.maxDate.getFullYear() - 13);

  }

  ngOnInit(): void {
    this.temple.getList().subscribe((result)=>{
      console.warn(result)
      this.templeNames = result;
    });
  }

  dropDownChange(){
    this.selectedValue = this.donationForm.value.templeName;
  }

  OnSubmit(){
    console.log(this.donationForm.value);


    this.donationForm.value.templeName = this.templeNames[this.selectedValue-1].templeName;

    this.donation.saveDonation(this.donationForm.value).subscribe((result)=>{
      console.warn("result is here",result);
      this.router.navigate(['mybookings']);
    })
  }
}
