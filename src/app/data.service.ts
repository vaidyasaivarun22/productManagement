import { Injectable } from '@angular/core';
import { product } from './models/product_id.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// Added an decorattor hence the below class acts as service
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private hc:HttpClient) { }
  getIphonesData():Observable<product[]>
  {
    return this.hc.get<product[]>("assets/iphones.json");
  };
  getSamsungData():Observable<product[]>
  {
    return this.hc.get<product[]>("assets/samsung.json");
  };
  getXiaomiData():Observable<product[]>
  {
    return this.hc.get<product[]>("assets/xiaomi.json");
  }
}
