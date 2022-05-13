import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }
  products=[1,2,3,4,5,6,7,8,9];

}
