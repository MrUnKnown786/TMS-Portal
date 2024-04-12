import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  url = "http://localhost:3000/Bookings"
  constructor(private http:HttpClient) { }

  getbookings(){
    return this.http.get(this.url);
  }

  saveBooking(data:any){
    return this.http.post(this.url,data);
  }
}
