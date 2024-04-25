import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TempleService {


  url = "http://localhost:3000/Temples"
  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get(this.url)
  }

  getTempleById(id:any){
    return this.http.get(`http://localhost:3000/Temples?id=${id}`);
  }

  getTempleByName(name:any){
    return this.http.get(`http://localhost:3000/Temples?templeName=${name}`);
  }
}
