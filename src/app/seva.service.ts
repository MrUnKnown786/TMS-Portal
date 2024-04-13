import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SevaService {

  url = "http://localhost:3000/Seva"

  constructor(private http:HttpClient) { }

  getlistbyid(id:any){
    return this.http.get(`http://localhost:3000/Seva?templeId=${id}`);
  }
}
