import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { mobile } from '../models/mobile.model';

@Component({
  selector: 'app-addnewsamsung',
  templateUrl: './addnewsamsung.component.html',
  styleUrls: ['./addnewsamsung.component.css']
})
export class AddnewsamsungComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }
  newObj:mobile = new mobile('','','');
  ngOnInit(): void {
  }
  onSubmitNewSamsung()
  {
    if(this.newObj.productTitle != '' && this.newObj.productImage != '' && this.newObj.description != '')
    {
      this.dsObj.createNewSamsungData(this.newObj).subscribe(
      data=>{
        alert("New Samsung Mobile Added To Existing Collection");
        this.router.navigateByUrl('products/samsung');
      },
      err=>{'error in reading data'+err}
      )
    }
    else
    {
      alert("Some Fields are missing data. Ensure all fields are filled");
    }
  }
}
