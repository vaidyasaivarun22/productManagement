import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-xiaomi',
  templateUrl: './xiaomi.component.html',
  styleUrls: ['./xiaomi.component.css']
})
export class XiaomiComponent {

  xiaomi:product[]=[
    {
      productTitle:"Xiaomi 11T Pro 5G(Celestial Magic,8GB,128GB)",
      description:"M.R.P.:₹38,999.Inclusive of all taxes EMI starts @₹1,836.No Cost EMI available",
      productImage:"https://m.media-amazon.com/images/I/71Od5yJbohL._SX679_.jpg"
    },
    {
      productTitle:"Xiaomi 11T Pro 5G(Meteore Black,8GB,256GB)",
      description:"M.R.P.:₹40,999.Inclusive of all taxes EMI starts @₹1,930.No Cost EMI available",
      productImage:"https://m.media-amazon.com/images/I/71qe5DogAtL._SX569_.jpg"
    },
    {
      productTitle:"Xiaomi 12 Pro | 5G (Opera Mauve, 12GB, 256GB)",
      description:"M.R.P.:₹66,999.00.Inclusive of all taxes EMI starts at ₹3,154.No Cost EMI available",
      productImage:"https://m.media-amazon.com/images/I/71lYm08fIZL._SX569_.jpg"
    },
    {
      productTitle:"Xiaomi 11 Lite NE 5G (Jazz Blue, 6GB ,128 GB)",
      description:" M.R.P.:₹26,999.00.Inclusive of all taxes.EMI starts at ₹1,271. No Cost EMI available",
      productImage:"https://i01.appmifile.com/webfile/globalimg/Iris/xiaomi-11-lite-5g-ne-blue.png"
    },
    {
      productTitle:"Mi 11X 5G (Cosmic Black 8GB RAM 128GB ROM)",
      description:"-14% M.R.P.: ₹34,999.Inclusive of all taxes EMI starts at ₹1,412. No Cost EMI available",
      productImage:"https://m.media-amazon.com/images/I/71VQXjN6R7S._SX569_.jpg"
    },
    {
      productTitle:"Xiaomi Pad5|Snapdragon 860|2.5K Resolution",
      description:"-29% M.R.P.: ₹37,999.00 Inclusive of all taxes EMI starts at ₹1,271. No Cost EMI available",
      productImage:"https://m.media-amazon.com/images/I/61Eb9vtdSML._SY450_.jpg"
    },
    {
      productTitle:"Xiaomi MI Redmi Note 7S 32GB/3GB (White)",
      description:"₹11,990.00 Inclusive of all taxes EMI starts at ₹564. No Cost EMI available ",
      productImage:"https://i01.appmifile.com/webfile/globalimg/in/cms/C242F83B-6939-035E-6201-F7F739B24211.jpg"
    },
    {
      productTitle:"Redmi 9 Power (Fiery Red, 4GB RAM, 64GB Storage)",
      description:"-12% M.R.P.: ₹13,999.00 Inclusive of all taxes EMI starts at ₹582. No Cost EMI available",
      productImage:"https://m.media-amazon.com/images/I/71hEzQGO5qL._SX569_.jpg"
    },
    {
      productTitle:"Poco F1 by Xiaomi (Armored Ed., 8GB ,256GB)",
      description:"-32% M.R.P.: ₹30,999.00 Inclusive of all taxes EMI starts at ₹988.No Cost EMI available",
      productImage:"https://global.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1534849164.07512520.png"
    },
    {
      productTitle:"Xiaomi 11i 5G (Camo Green, 8GB RAM, 128GB Storage)",
      description:"Curently out of stock",
      productImage:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641445060.14783419.png"
    }]
}
