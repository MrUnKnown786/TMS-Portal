import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3000/User";
  constructor(private http:HttpClient) { }

  saveUser(data:any){
    return this.http.post(this.url,data);
  }
  getuser(email:any,password:any){
    return this.http.get(`http://localhost:3000/User?email=${email}&password=${password}`);
  }
}
