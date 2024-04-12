import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DarshanService {

  url = "http://localhost:3000/Darshan"

  constructor(private http:HttpClient) { }

  getlistbyid(id:any){
    return this.http.get(`http://localhost:3000/Darshan?templeId=${id}`);
  }
}
