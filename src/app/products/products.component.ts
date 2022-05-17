import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';
import {TestService} from '../test.service';
import {ProductDetailsComponent} from '../product-details/product-details.component'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
 
  cartCount:string[]=[];
  constructor(public tsObj:TestService){
    // this.cartCount = this.tObj.count;
    this.cartCount = this.tsObj.getData();
  }
  ngOnInit(){
    // this.cartCount = this.obj.getData();
  }
  getProductDetailsFromChild(productTitle:string)
  {
    this.cartCount.push(productTitle);
  }
}

