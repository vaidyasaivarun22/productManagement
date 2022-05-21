import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p=1;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  iphonebannerClick()
  {
      this.router.navigateByUrl('products/iphones');
  }
  samsungbannerClick()
  {
    this.router.navigateByUrl('products/samsung');
  }
  xiaomibannerClick()
  {
    this.router.navigateByUrl('products/xiaomi');
  }
}
