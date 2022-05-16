import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from '../models/product.model';
import {TestService} from '../test.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  count:number=0;
  count2:number=0;
  change:number=1;
  constructor(private tsObj:TestService){
      // this.tsObj.setData(this.count);
    }
    @Input()
    productobj!: product;
    // @Output() myEvent = new EventEmitter();
    sendProductToParent(productTitle:string)
    {
      this.count++;
      this.change=0;
      // this.myEvent.emit(productTitle);
    }
    ngOnInit(){
    this.tsObj.setData(this.count2);
  }
}


