import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from '../models/product_id.model';

@Component({
  selector: 'app-xiaomi',
  templateUrl: './xiaomi.component.html',
  styleUrls: ['./xiaomi.component.css']
})
export class XiaomiComponent implements OnInit{

  xiaomi:product[]=[];
  constructor(private dsObj:DataService){

  }
  ngOnInit(){
    this.dsObj.getXiaomiData().subscribe
    (
      (data:product[])=>{this.xiaomi= data},
      
      (err: any)=>console.log('error is: ',err)
    )
  }

}
