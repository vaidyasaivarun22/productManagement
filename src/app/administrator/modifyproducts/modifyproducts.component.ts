import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { mobile } from 'src/app/models/mobile.model';
import { SearchPipe } from 'src/app/search.pipe';
@Component({
  selector: 'app-modifyproducts',
  templateUrl: './modifyproducts.component.html',
  styleUrls: ['./modifyproducts.component.css']
})
export class ModifyproductsComponent implements OnInit {
  iphones: mobile[]=[];
  samsung: mobile[]=[];
  xiaomi: mobile[]=[];

  searchTerm!: string;

  //Index to hold current Iphone object that is to be updated
  editIphoneIndex: any;
  editIphoneObj = new mobile('','','');
  editIphoneStatus:boolean = false;

  //Index to hold current Samsung object that is to be updated
  editSamsungIndex: any;
  editSamsungObj = new mobile('','','');
  editSamsungStatus:boolean = false;

  //Index to hold current xiaomi object that is to be updated
  editXiaomiIndex: any;
  editXiaomiObj = new mobile('','','');
  editXiaomiStatus:boolean = false;

  constructor(private dsObj:DataService) { }

  ngOnInit(){
    this.getUsers();
  }
  getUsers()
  {
    this.dsObj.getIphonesData().subscribe(
      (data:mobile[])=>{
          this.iphones = data;
      },
      err=>{console.log('error in reading iphones data',err)}
    )
    this.dsObj.getSamsungData().subscribe(
      (data:mobile[])=>{
          this.samsung = data;
      },
      err=>{console.log('error in reading iphones data',err)}
    )
    this.dsObj.getXiaomiData().subscribe(
      (data:mobile[])=>{
          this.xiaomi = data;
      },
      err=>{console.log('error in reading iphones data',err)}
    )
  }
  // -----------------------------------------------------------------------------------
  //To edit Iphone data
  editIphone(iphoneObj:mobile,ind:number){
      this.editIphoneObj = iphoneObj;
      this.editIphoneIndex = ind;
      this.editIphoneStatus = true;
      // console.log(ind+'  '+iphoneObj.id);
  }
  // After saving Iphone Data
  onSaveIphone(iphoneObj:mobile){ 
    this.editIphoneStatus = false;
    iphoneObj.id = this.editIphoneObj["id"];

    this.dsObj.updateIphone(iphoneObj).subscribe(
      obj=>{
        alert("Iphone data updated successfully!!!");
      },
      err=>{console.log('Error in Saving data',err)}
    )
  }
  // After Delete Button selected of Iphone
  onDeleteIphone(iphoneObj:mobile)
  {
      this.dsObj.deleteIphone(iphoneObj.id).subscribe(
        (data:any)=>{
          alert("Successfully Deleted Iphones - "+iphoneObj.productTitle);
        },
        (err:any)=>{console.log("Error in deleting data",err)}
      )
  }
// -------------------------------------------------------------------------------------------//
  //To edit Samsung data
  editSamsung(samsungObj:mobile,ind:number){
    this.editSamsungObj = samsungObj;
    this.editSamsungIndex = ind;
    this.editSamsungStatus = true;
  }
  // After saving Samsung Data
  onSaveSamsung(samsungObj:mobile){ 
    this.editSamsungStatus = false;
    samsungObj.id = this.editSamsungObj["id"];
    samsungObj.description = this.editSamsungObj.description;
    samsungObj.productTitle = this.editSamsungObj.productTitle;
    samsungObj.productImage = this.editSamsungObj.productImage;

    this.dsObj.updateSamsung(samsungObj).subscribe(
      obj=>{
        alert("Samsung mobile data updated successfully!!!");
      },
      err=>{console.log('Error in Saving data',err)}
    )
  }
  // After Delete Button selected of samsung
  onDeleteSamsung(samsungObj:mobile)
  {
      this.dsObj.deleteSamsung(samsungObj.id).subscribe(
        (data:any)=>{
          alert("Successfully Deleted Samsung model - "+samsungObj.productTitle);
        },
        (err:any)=>{console.log("Error in deleting data",err)}
      )
  }
  // ------------------------------------------------------------------------------------//
   //To edit Xiaomi data
   editXiaomi(xiaomiObj:mobile,ind:number){
    this.editXiaomiObj = xiaomiObj;
    this.editXiaomiIndex = ind;
    this.editXiaomiStatus = true;
  }
  // After saving Xiaomi Data
  onSaveXiaomi(xiaomiObj:mobile){ 
    this.editXiaomiStatus = false;
    xiaomiObj.id = this.editXiaomiObj["id"];
    xiaomiObj.description = this.editXiaomiObj.description;
    xiaomiObj.productTitle = this.editXiaomiObj.productTitle;
    xiaomiObj.productImage = this.editXiaomiObj.productImage;

    this.dsObj.updateXiaomi(xiaomiObj).subscribe(
      obj=>{
        alert("xiaomi mobile data updated successfully!!!");
      },
      err=>{console.log('Error in Saving data',err)}
    )
  }
  // After Delete Button selected of Xiaomi
  onDeleteXiaomi(xiaomiObj:mobile)
  {
      this.dsObj.deleteXiaomi(xiaomiObj.id).subscribe(
        (data:any)=>{
          alert("Successfully Deleted Xiaomi model - "+xiaomiObj.productTitle);
        },
        (err:any)=>{console.log("Error in deleting data",err)}
      )
  }
}
