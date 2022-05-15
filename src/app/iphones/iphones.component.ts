import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { product } from '../models/product.model';

@Component({
  selector: 'app-iphones',
  templateUrl: './iphones.component.html',
  styleUrls: ['./iphones.component.css']
})
export class IphonesComponent implements OnInit{
  iphones:product[]=[];
  constructor(private dsObj:DataService){

  }
  ngOnInit(){
    this.dsObj.getIphonesData().subscribe
    (
      (data:product[])=>
      {
        this.iphones = data;
      },
      (err: any)=>{console.log('error is: ',err)}
    )
  }

}
