import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder:FormBuilder, private auth:AuthService, private router:Router){
    if(localStorage.getItem("isLoggedIn")){
      this.router.navigate(['']);
    }
  }

  SignUpForm = this.formBuilder.group({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  onSubmit():void{
    console.log(this.SignUpForm.value);
    this.auth.saveUser(this.SignUpForm.value).subscribe((result)=>{
      console.warn("result is here",result);
      alert("User Created Sucessfully");
      this.router.navigate(['login']);
    });
  }

}
