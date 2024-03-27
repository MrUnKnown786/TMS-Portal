import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sevas',
  templateUrl: './sevas.component.html',
  styleUrls: ['./sevas.component.css']
})
export class SevasComponent {

  constructor(private appComponent:AppComponent, private router:Router){
    if(!this.appComponent.isLoggedIn){
      this.router.navigate(['login']);
    }

  }

}
