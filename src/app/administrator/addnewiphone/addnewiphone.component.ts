import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { mobile } from 'src/app/models/mobile.model';

@Component({
  selector: 'app-addnewiphone',
  templateUrl: './addnewiphone.component.html',
  styleUrls: ['./addnewiphone.component.css']
})
export class AddnewiphoneComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  mobileModel = new mobile('','','');
  onSubmitNewMobile()
  {
    if(this.mobileModel.productTitle != '' && this.mobileModel.productImage != '' && this.mobileModel.description != '')
    {
      this.dsObj.createNewIphoneData(this.mobileModel).subscribe(
        data=>{
          alert('New Iphone added to collection');
          // this.router.navigateByUrl('products/iphones');//Enable if u want to redirect after adding new
        },
        err=>{
          console.log("error in rading data",err);
        }
      )
      // console.log(this.mobileModel);
    }
    else
    {
      alert("Some Fields are missing data. Ensure all fields are filled");
    }
  }

}
