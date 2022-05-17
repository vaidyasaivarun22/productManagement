import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsidecardService } from '../insidecard.service';
import { product } from '../models/product_id.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  postObj!:product;
  constructor(private ar:ActivatedRoute,private ic:InsidecardService) { }

  ngOnInit(): void {
    let id = this.ar.snapshot.params['id'];
    //get data of card which has id as above ..
    this.ic.getCardDetails(id).subscribe(
      (obj:product)=>{
          this.postObj = obj;
      },
      (err:any)=>{'error in reading data is:'+err}
    );
  }  
}
