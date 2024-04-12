import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-temple',
  templateUrl: './temple.component.html',
  styleUrls: ['./temple.component.css']
})
export class TempleComponent {

  path:any;

  constructor(private route: ActivatedRoute) {
    this.path = this.route.snapshot.params['id'];

  }


}
