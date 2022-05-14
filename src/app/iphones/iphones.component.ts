import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-iphones',
  templateUrl: './iphones.component.html',
  styleUrls: ['./iphones.component.css']
})
export class IphonesComponent{
  iphones:product[]=[{
    productTitle:"Apple iPhone 13 (128GB) - Blue",
    description:"-13% ₹69,900.00 M.R.P.: ₹79,900.00. Inclusive of all taxes. EMI starts at ₹3,290. No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg"
  },
  {
    productTitle:"Apple iPhone 13 Pro Max (128GB) - Sierra Blue",
    description:"₹1,29,900.00 .Inclusive of all taxes.EMI starts at ₹6,115. No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg"
  },
  {
    productTitle:"Apple iPhone 13 Pro (128GB) - Sierra Blue",
    description:"₹1,19,900.00 .Inclusive of all taxes. EMI starts at ₹5,644.No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/71rswJs9W9L._SL1500_.jpg"
  },
  {
    productTitle:"Apple iPhone 13 Mini (256 GB) - pink",
    description:"-7% ₹64,999.00 M.R.P.: ₹69,900.00 .Inclusive of all taxes. EMI starts at ₹3,060. No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/61nPiOOv9BL._SX522_.jpg"
  },
  {
    productTitle:"Apple iPhone SE (64 GB) - Midnight (3rd Generation)",
    description:"-5% ₹41,900.00 M.R.P.: ₹43,900.00 .Inclusive of all taxes. EMI starts at ₹1,972. No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/61TOWf11+jL._SX522_.jpg"
  },
  {
    productTitle:"Apple iPhone 12 (64GB) - Blue",
    description:"-17% ₹54,900.00 M.R.P.: ₹65,900.00 .Inclusive of all taxes. EMI starts at ₹2,584. No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX522_.jpg"
  },
  {
    productTitle:"Apple iPhone 12 (256GB) - (Product) RED",
    description:"-16% ₹67,999.00 M.R.P.: ₹80,900.00 .Inclusive of all taxes .EMI starts at ₹3,201. No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/71E5zB1qbIL._SX522_.jpg"
  },
  {
    productTitle:"Apple iPhone 12 Mini (64GB) - Green",
    description:"₹59,900.00 Inclusive of all taxes. EMI starts at ₹2,820. No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/71i+-WmxHWL._SL1500_.jpg"
  },
  {
    productTitle:"Apple iPhone 12 Mini (128GB) - White",
    description:"Currently unavailable.We don't know when or if this item will be back in stock",
    productImage:"https://m.media-amazon.com/images/I/71tT8J5cKuL._SL1500_.jpg"
  },
  {
    productTitle:"Apple iPhone 13 Pro (1TB) - Silver",
    description:"₹1,69,900.00. Inclusive of all taxes. EMI starts at ₹7,998. No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/617FFRO3vcL._SL1500_.jpg"
  },
  {
    productTitle:"Apple iPhone 13 Mini (256GB) - (Product) RED",
    description:"-7% ₹73,999.00 M.R.P.: ₹79,900.00 .Inclusive of all taxes. EMI starts at ₹3,483. No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/61F7Xcyux0L._SL1500_.jpg"
  }
  ];
}