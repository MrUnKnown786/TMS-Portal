import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  SignInForm: FormGroup; // Declare SignInForm as a FormGroup

  authenticationError: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) {
    this.SignInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Add validators for email field
      password: ['', Validators.required] // Add required validator for password field
    });

    if (localStorage.getItem("isLoggedIn")) {
      this.router.navigate(['']);
    }
  }

  item: any = [];

  onSubmit(): void {
    console.log(this.SignInForm.value);
    if (this.SignInForm.valid) { // Check if form is valid before making API call
      this.auth.getuser(this.SignInForm.value.email, this.SignInForm.value.password).subscribe((result) => {
        console.warn("result is here", result);
        this.item = result;

        if(this.item.length == 0){
          this.authenticationError = 'Invalid email or password. Please try again.';
        }
        else{
          localStorage.setItem('userId', this.item[0].id);
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('userName', this.item[0].name);
          location.reload();
        }
      });
    }
  }
}
