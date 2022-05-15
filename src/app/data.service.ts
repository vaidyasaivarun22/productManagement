import { Injectable } from '@angular/core';
import { product } from './models/product.model';

// Added an decorattor hence the below class acts as service
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() {  }

  private iphones:product[]=[
  {
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
  getIphonesData():product[]
  {
      return this.iphones;
  };

  private samsung:product[]=[
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
  ];
  getSamsungData():product[]
  {
     return this.samsung;
  };

  private xiaomi:product[]=[
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
  }];
  getXiaomiData():product[]
  {
      return this.xiaomi;
  }
}
