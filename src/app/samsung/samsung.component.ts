import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from '../models/product.model';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent implements OnInit{
    constructor(private dsObj:DataService)
    {}
    samsung:product[]=[];
    ngOnInit(){
      this.samsung = this.dsObj.getSamsungData();
    }
}
