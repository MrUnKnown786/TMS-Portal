import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  url = "http://localhost:3000/Donation"
  constructor(private http:HttpClient) { }

  getDonations(){
    return this.http.get(`http://localhost:3000/Donation?userId=${localStorage.getItem("userId")}`);
  }

  saveDonation(data:any){
    return this.http.post(this.url,data);
  }

}
