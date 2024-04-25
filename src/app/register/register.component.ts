import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  SignUpForm: FormGroup;
  confirmPasswordError :string = "";

  constructor(private formBuilder:FormBuilder, private auth:AuthService, private router:Router){
    if(localStorage.getItem("isLoggedIn")){
      this.router.navigate(['']);
    }

    this.SignUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator // Custom validator for password match
    });
  }

  passwordMatchValidator(control: FormGroup): ValidationErrors | null {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');
    

    if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPasswordControl?.setErrors(null);
      return null;
    }
  }


  onSubmit():void{
    console.log(this.SignUpForm.value);

    if(this.SignUpForm.valid){
      this.auth.saveUser(this.SignUpForm.value).subscribe((result)=>{
        console.warn("result is here",result);
        alert("User Created Sucessfully");
        this.router.navigate(['login']);
      });

    }
  }

}
