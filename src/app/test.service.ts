import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  data:any;
  getData()
  {
      return this.data;
  }
  setData(value:number)
  {
      this.data = value;
  }
}
