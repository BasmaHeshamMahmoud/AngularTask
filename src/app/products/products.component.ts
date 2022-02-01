import { ICategory } from './../Shared Classes and types/interfaces';
import { DiscountOffers } from './../Shared Classes and types/enums';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Shared Classes and types/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  Discount: DiscountOffers;
  storeName: string;
  storeLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurshased: boolean;

  constructor() {
    this.Discount = DiscountOffers.discountTwo;
    this.storeName = 'StoreAppName';
    this.storeLogo = '../../assets/images/logoStoreImage.jpg';
    this.ProductList = [
      {
        id: 1,
        name: 'Product One',
        quantity: 5,
        price: 100,
        img: '/assets/images/productImages.png',
      },
      {
        id: 2,
        name: 'Product Two',
        quantity: 15,
        price: 500,
        img: '/assets/images/productImages.png',
      },
      {
        id: 3,
        name: 'Product Three',
        quantity: 4,
        price: 150,
        img: '/assets/images/productImages.png',
      },
      {
        id: 4,
        name: 'Product Four',
        quantity: 55,
        price: 200,
        img: '/assets/images/productImages.png',
      },
    ];
    this.CategoryList = [
      {
        id: 11,
        name: 'Category One',
      },
      {
        id: 2,
        name: 'Category Two',
      },
    ];
    this.ClientName = 'Client One';
    this.IsPurshased = false;
  }

  ngOnInit(): void {}
}
