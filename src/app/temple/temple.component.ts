import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TempleService } from '../temple.service';
import { DarshanService } from '../darshan.service';
import { SevaService } from '../seva.service';


@Component({
  selector: 'app-temple',
  templateUrl: './temple.component.html',
  styleUrls: ['./temple.component.css']
})
export class TempleComponent implements OnInit {

  path:any;
  templeData:any = [];
  imgPath = "";
  templeName = "";
  address = "";
  about = "";
  timings = "";

  darshanData:any = [];
  sevaData:any = [];

  constructor(private route: ActivatedRoute, private temple:TempleService, private darshan:DarshanService, private seva:SevaService) {
    this.path = this.route.snapshot.params['id'];

  }
 ngOnInit(): void {

  this.temple.getTempleById(this.path).subscribe((result)=>{

    this.templeData = result;


    this.imgPath = this.templeData[0].imgPath;
    this.templeName = this.templeData[0].templeName;
    this.address = this.templeData[0].address;
    this.about = this.templeData[0].about;
    this.timings = this.templeData[0].timings;
  });

  this.darshan.getlistbyid(this.path).subscribe((result)=>{
      this.darshanData = result;
  });
  
  this.seva.getlistbyid(this.path).subscribe((result)=>{
    this.sevaData = result;
});
   
 }

}
