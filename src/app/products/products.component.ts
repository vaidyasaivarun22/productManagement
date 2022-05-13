import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

    products:product[]=[{
    productTitle:"Jungle scout Water Bottles",
    description:"Drink more water to stay hydrated Amazon Product Images: 2021 Requirements & How to Optimize Listing Visit Images may be subject to copyrigh",
    productImage:"https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"
  },
  {
    productTitle:"Sony Camera",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus dolor fuga. Nesciunt accusantium minima unde vitae consequuntur cum molestiae?",
    productImage:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    productTitle:"Zero Uv",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus dolor fuga. Nesciunt accusantium minima unde vitae consequuntur cum molestiae?",
    productImage:"https://rukminim2.flixcart.com/image/612/612/khglj0w0-0/sunglass/x/l/n/48-black-clear-liza-angel-original-imafxh8wegyvnub4.jpeg?q=70"
  },
  {
    productTitle:"Herbal products",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus dolor fuga. Nesciunt accusantium minima unde vitae consequuntur cum molestiae?",
    productImage:"https://media.istockphoto.com/photos/skin-and-hair-care-beauty-product-mockup-lotion-bottle-oil-cream-on-picture-id1198863709?k=20&m=1198863709&s=612x612&w=0&h=fIKFkMvxGYvKW1ZjUc-QZDJqRaYnrr2UeUh91ItPfog="
  },
  {
    productTitle:"Boult Headphones",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus dolor fuga. Nesciunt accusantium minima unde vitae consequuntur cum molestiae?",
    productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU"
  },
  {
    productTitle:"Shoes Nike",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus dolor fuga. Nesciunt accusantium minima unde vitae consequuntur cum molestiae?",
    productImage:"http://img1a.flixcart.com/fk-sp-static/21072015/blue-24744-yepme-8-400x400-imadqtjww8cwpthg.jpeg"
  },
  {
    productTitle:"Rubix Cube",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus dolor fuga. Nesciunt accusantium minima unde vitae consequuntur cum molestiae?",
    productImage:"https://www.kvstech.com/img/service/product.jpg"
  },
  {
    productTitle:"Shoes Browntape",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus dolor fuga. Nesciunt accusantium minima unde vitae consequuntur cum molestiae?",
    productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkmSMuoyfBAut8Va8zyTKAT4_7bOhor86NQ&usqp=CAU"
  },
  {
    productTitle:"Iphone 13",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus dolor fuga. Nesciunt accusantium minima unde vitae consequuntur cum molestiae?",
    productImage:"https://cdn.dashhudson.com/media/640/1626672749.231006131723.jpeg"
  },
  {
    productTitle:"Titan Watches",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus dolor fuga. Nesciunt accusantium minima unde vitae consequuntur cum molestiae?",
    productImage:"https://burst.shopifycdn.com/photos/modern-time-pieces.jpg?width=500&format=pjpg&exif=1&iptc=1"
  },
  {
    productTitle:"Coca-cola Drinks",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus dolor fuga. Nesciunt accusantium minima unde vitae consequuntur cum molestiae?",
    productImage:"https://www.bisleri.com/images/banner-03-product.png",
  }]
}

