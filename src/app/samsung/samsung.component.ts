import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent {

  samsung:product[]=[
  {
    productTitle:"Samsung Galaxy M12 (White,4GB, 64GB)",
    description:"M.R.P.:₹12,999.Inclusive of all taxes EMI starts at ₹447.No Cost EMI available",
    productImage:"https://media.croma.com/image/upload/v1615880330/Croma%20Assets/Communication/Mobiles/Images/233577_9_uphv1e.png"
  },
  {
    productTitle:"Samsung Galaxy M335G (Mystique Green ,8GB,128GB)",
    description:"M.R.P.:₹25,999.00.Inclusive of all taxes EMI starts at ₹918. No Cost EMI available",
    productImage:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m536bzgeinu/gallery/in-galaxy-m53-5g-sm-m536-sm-m536bzgeinu-532184026?$730_584_PNG$"
  },
  {
    productTitle:"Samsung Galaxy M53 5G (Deep Ocean Blue, 6GB, 128GB)",
    description:"M.R.P.:₹32,999.Inclusive of all taxes EMI starts at ₹1,247. No Cost EMI available",
    productImage:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m536bzbfinu/gallery/in-galaxy-m53-5g-sm-m536-421705-sm-m536bzbfinu-532181615?$730_584_PNG$"
  },
  {
    productTitle:"Samsung Galaxy M32 (Light Blue,6GB,128GB) ",
    description:"M.R.P.:₹18,999.00.Inclusive of all taxes.EMI starts at ₹659. No Cost EMI available",
    productImage:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m325flbcins/gallery/in-galaxy-m32-6gb-ram-sm-m325flbcins-462257076?$730_584_PNG$"
  },
  {
    productTitle:"Samsung Galaxy M33 5G (Deep Ocean Blue,8GB,128GB Storage) ",
    description:"M.R.P.:₹25,999.00.Inclusive of all taxes.EMI starts at ₹918.No Cost EMI available",
    productImage:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m336bzbrins/gallery/in-galaxy-m33-5g-8gb-ram-sm-m336bzbrins-531842017?$730_584_PNG$"
  },
  {
    productTitle:"Samsung Galaxy M32(Light Blue, 4GB RAM, 64GB Storage)",
    description:"M.R.P.:₹16,999.00.Inclusive of all taxes.EMI starts at ₹565.No Cost EMI available",
    productImage:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m325flbcins/gallery/in-galaxy-m32-6gb-ram-sm-m325flbcins-462257076?$730_584_PNG$"
  },
  {
    productTitle:"Samsung Galaxy S20FE 5G (Cloud Navy,8GB,128GB)",
    description:"-53% M.R.P.:₹74,999.Inclusive of all taxes EMI start ₹1,647.No Cost EMI available",
    productImage:"https://5.imimg.com/data5/SELLER/Default/2022/1/DO/XH/UU/44538015/s20fe-5g-8128--500x500.png"
  },
  {
    productTitle:"Samsung GURU GT-E1215 (Indigo Blue)",
    description:"-25% ₹1,574.00 M.R.P.: ₹2,099.00.Inclusive of all taxes",
    productImage:"https://m.media-amazon.com/images/I/61ZZJKaTJuL._SY606_.jpg"
  },
  {
    productTitle:"Samsung Galaxy A23 Blue, 6GB RAM, 128GB Storage",
    description:"-23% ₹18,499.00 M.R.P.: ₹23,990.00.Inclusive of all taxes.EMI starts at ₹871.No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/91W42b8YW+L._SX569_.jpg"
  },
  {
    productTitle:"Samsung Galaxy A13 Blue, 6GB RAM, 128GB Storage ",
    description:"-12% ₹17,499.00 M.R.P.: ₹19,990.00.Inclusive of all taxes.EMI starts at ₹824.No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/61BaZn0QohL._SX569_.jpg"
  },
  {
    productTitle:"Samsung GalaxyS21FE 5G (Lavender,8GB, 128GB)",
    description:"-27% ₹54,999.00 M.R.P.:₹74,999.00 .Inclusive of all taxes.EMI starts at ₹2,589.No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/8131pwAojZL._SX569_.jpg"
  },
  {
    productTitle:"Samsung Galaxy M53 5G (Mystique Green, 6GB, 128GB Storage)",
    description:"M.R.P.:	₹32,990.00 Deal Price:₹26,499.00 You Save:	₹6,491.00 (20%).Inclusive of all taxes.EMI starts at ₹1,247.No Cost EMI available",
    productImage:"https://m.media-amazon.com/images/I/71MaDLgHnxL._SX679_.jpg"
  },
  {
    productTitle:"Samsung Galaxy A03 Core (Blue, 2GB RAM, 32GB)",
    description:"-24% ₹7,999.00 M.R.P.:₹10,499.00.Inclusive of all taxes.EMI starts at ₹377.No Cost EMI available",
    productImage:"https://www.droidafrica.net/wp-content/uploads/2021/11/Samsung-Galaxy-A03-Core.jpg"
  },
  ]
}
