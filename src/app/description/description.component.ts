import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { InsidecardService } from '../insidecard.service';
import { product } from '../models/product_id.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  postObj!:product;
  constructor(private ar:ActivatedRoute,private ic:InsidecardService,public dsObj:DataService,private router:Router) {
  }
  
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
  checkLogin()
  {
    if(!this.dsObj.userLoginStatus())
    {
      let result=confirm('Please Login First to rate!!!');
      if(result)
      {
        this.router.navigateByUrl('login');
      }
    }
  }
  countRating:number=254;
  ratingStatus:boolean=false;
  userRated()
  {
    if(!this.dsObj.userLoginStatus())
    {
      alert("Your rating doesn't count because you didn't login :-(")
    }
    else{
      this.ratingStatus=true;
      this.countRating++;
      alert("Rating Submission Successfull !!!");
      alert("Thanks for rating us.Congrats BTW :) ")
    // alert("Your rating would be posted after verifying by merchant to ensure genune purchase ratings :-)");
  }

}
}
