import { Injectable } from '@angular/core';
import { product } from './models/product.model';
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
    return this.hc.get<product[]>("http://localhost:3000/iphones");
  };
  getSamsungData():Observable<product[]>
  {
    return this.hc.get<product[]>("http://localhost:3000/samsung");
  };
  getXiaomiData():Observable<product[]>
  {
    return this.hc.get<product[]>("http://localhost:3000/xiaomi");
  }
}
