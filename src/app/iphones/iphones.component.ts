import { Component, OnInit } from '@angular/core';
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
    this.iphones=this.dsObj.getIphonesData();
  }

}
