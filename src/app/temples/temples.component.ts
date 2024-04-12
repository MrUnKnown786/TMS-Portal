import { Component, OnInit } from '@angular/core';
import { TempleService } from '../temple.service';


@Component({
  selector: 'app-temples',
  templateUrl: './temples.component.html',
  styleUrls: ['./temples.component.css']
})
export class TemplesComponent implements OnInit {

  // temples = [{"id":"1","templeName": "Temple 1", "address":"Address, City, State, Zip Code, 535737", "img":"temple-img.jpg"},
  // {"id":"2","templeName": "Temple 2", "address":"Address1222, City, State, Zip Code, 535737", "img":"temple-img.jpg"}
  // ]

  temples:any;

  constructor(private temple:TempleService) { }

  ngOnInit(): void {
    this.temple.getList().subscribe((result)=>{
      console.warn(result)
      this.temples = result
    })
  }
}
