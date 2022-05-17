import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../models/product_id.model';
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
  constructor(private tsObj:TestService,private router:Router){
      // this.tsObj.setData(this.count);
    }
    @Input()
    productobj!: product;
    // @Output() myEvent = new EventEmitter();
    sendProductToParent(productTitle:string)
    {
      this.count++;
      // this.myEvent.emit(this.count);
    }
    ngOnInit(){
    this.tsObj.setData(this.count2);
  }
  onSelectId(id:number){
      if(id<=11)
          this.router.navigateByUrl('products/iphones/'+id);
      else if(id<=24)
      {
        this.router.navigateByUrl('products/samsung/'+id);
      }
      else
      {
        this.router.navigateByUrl('products/xiaomi/'+id);
      }
  }
}


