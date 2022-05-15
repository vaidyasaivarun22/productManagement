import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';
import {TestService} from '../test.service';
import {ProductDetailsComponent as pdc} from '../product-details/product-details.component'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  cartCount:any;
  constructor(public tsObj:TestService){
    this.cartCount = this.tsObj.getData();
  }
  ngOnInit(){
    // this.cartCount = this.obj.getData();
  }
}

