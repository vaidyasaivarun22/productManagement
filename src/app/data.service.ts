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
  getIphonesData():Observable<product[]>
  {
    return this.hc.get<product[]>("http://localhost:3000/iphones");
    //return this.hc.get<product[]>("assets/iphones.json");//For running without server enable this

  };
  getSamsungData():Observable<product[]>
  {
    return this.hc.get<product[]>("http://localhost:3000/samsung");
    //return this.hc.get<product[]>("assets/samsung.json");//For running without server enable this

  };
  getXiaomiData():Observable<product[]>
  {
    return this.hc.get<product[]>("http://localhost:3000/xiaomi");
    //return this.hc.get<product[]>("assets/xiaomi.json");//For running without server enable this
  }
  createNewIphoneData(mobileObj:mobile):Observable<any>
  {
    return this.hc.post<[mobile]>("http://localhost:3000/iphones",mobileObj);
  }
  createNewSamsungData(mobileObj:mobile):Observable<any>{
    return this.hc.post<[mobile]>("http://localhost:3000/samsung",mobileObj);
  }
  createNewXiaomiData(mobileObj:mobile):Observable<any>{
    return this.hc.post<[mobile]>("http://localhost:3000/xiaomi",mobileObj);
  }
}
