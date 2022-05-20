import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { mobile } from 'src/app/models/mobile.model';

@Component({
  selector: 'app-addnewxiaomi',
  templateUrl: './addnewxiaomi.component.html',
  styleUrls: ['./addnewxiaomi.component.css']
})
export class AddnewxiaomiComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  newObj:mobile = new mobile('','','');
  onSubmitNewXiaomi()
  {
    if(this.newObj.productTitle != '' && this.newObj.productImage != '' && this.newObj.description != '')
    {
      this.dsObj.createNewXiaomiData(this.newObj).subscribe(
        data=>{
          alert("New Xiaomi Mobile Added To Existing Collection");
          // this.router.navigateByUrl('products/xiaomi');//Enable to redirect after adding new mobile
        },
        err=>{console.log('Error in reading data',err)}
      )
    }
    else
    {
      alert("Some Fields are missing data. Ensure all fields are filled");
    }
  }

}
