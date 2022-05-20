import { Injectable } from '@angular/core';
import { product } from './models/product_id.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { mobile } from './models/mobile.model';

// Added an decorattor hence the below class acts as service
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private hc:HttpClient) { }
  //Get Reguest-->Reading purpose
  // 1.For iphones
  getIphonesData():Observable<product[]>
  {
    return this.hc.get<product[]>("http://localhost:3000/iphones");
    // return this.hc.get<product[]>("assets/iphones.json");//For running without server enable this

  };
  // 2.for samsung
  getSamsungData():Observable<product[]>
  {
    return this.hc.get<product[]>("http://localhost:3000/samsung");
    // return this.hc.get<product[]>("assets/samsung.json");//For running without server enable this

  };
  // 3.For Xiaomi
  getXiaomiData():Observable<product[]>
  {
    return this.hc.get<product[]>("http://localhost:3000/xiaomi");
    // return this.hc.get<product[]>("assets/xiaomi.json");//For running without server enable this
  }


  // POST Request--->Create new Iphone
  // 1.For Iphones
  createNewIphoneData(mobileObj:mobile):Observable<any>
  {
    return this.hc.post("http://localhost:3000/iphones",mobileObj);
  }
  // 2.For Samsung
  createNewSamsungData(mobileObj:mobile):Observable<any>{
    return this.hc.post("http://localhost:3000/samsung",mobileObj);
  }
  // 3.For Xiaomi
  createNewXiaomiData(mobileObj:mobile):Observable<any>{
    return this.hc.post("http://localhost:3000/xiaomi",mobileObj);
  }



  //PUT Request---->Update Iphone Data
  // 1.For Iphones
  updateIphone(modifiedIphoneObj:mobile):Observable<[mobile]>
  {
    return this.hc.put<[mobile]>("http://localhost:3000/iphones/"+modifiedIphoneObj.id,modifiedIphoneObj);
  }
  // 2.For Samsung
  updateSamsung(modifiedSamsungObj:mobile):Observable<[mobile]>
  {
    console.log("\nData service id is:"+modifiedSamsungObj.id);
    return this.hc.put<[mobile]>("http://localhost:3000/samsung/"+modifiedSamsungObj.id,modifiedSamsungObj);
  }
  // 3.For Xiaomi
  updateXiaomi(modifiedXiaomiObj:mobile):Observable<[mobile]>
  {
    return this.hc.put<[mobile]>("http://localhost:3000/xiaomi/"+modifiedXiaomiObj.id,modifiedXiaomiObj);
  }

  // DELETE Request----> For deleting Iphone Data
  // 1.For Iphone
  deleteIphone(deleteIphoneObj:number)
  {
    return this.hc.delete<number>("http://localhost:3000/iphones/"+deleteIphoneObj);
  }
  // 2.For Samsung
  deleteSamsung(deleteSamsungObj:number)
  {
    console.log(deleteSamsungObj);
    return this.hc.delete<number>("http://localhost:3000/samsung/"+deleteSamsungObj);
  }
  // 3.For Xiaomi
  deleteXiaomi(deleteXiaomiObj:number)
  {
    return this.hc.delete<number>("http://localhost:3000/xiaomi/"+deleteXiaomiObj);
  }

  // ---------------------------------------------------
  // user login status
  userLoginStatus():boolean
  {
    if(localStorage.getItem("username")==null && localStorage.getItem("password")==null)
      return false;
    else
      return true;
  }
  //user & Admin Logout
  userLogout(){
    localStorage.clear();
  }

  // ------------------------------------------------------
  //Admin login status
  adminLoginStatus():boolean
  {
    if(localStorage.getItem("username")==null && localStorage.getItem("password")==null)
      return false;
    else
      return true;
  }

}
