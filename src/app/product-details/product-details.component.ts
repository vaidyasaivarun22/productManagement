import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input()
  productobj!: product;
  
  @Output() myEvent = new EventEmitter();
  sendProductToParent(productTitle:string)
  {
    this.myEvent.emit(productTitle);
  }
}


