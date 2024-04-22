import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  url = "http://localhost:3000/Bookings"
  constructor(private http:HttpClient) { }

  saveBooking(data:any){
    return this.http.post(this.url,data);
  }

  getbookingbytype(type:any){
    return this.http.get(`http://localhost:3000/Bookings?bookingType=${type}&userId=${localStorage.getItem("userId")}`);
  }
}
