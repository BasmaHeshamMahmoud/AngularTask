import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  Products = [
    {
      id: 1,
      name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      quantity: 5,
      price: 3000,
      img: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      id: 2,
      name: 'Solid Gold Petite Micropave ',
      quantity: 15,
      price: 5000,
      img: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      id: 3,
      name: 'White Gold Plated Princess',
      quantity: 4,
      price: 15000,
      img: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      id: 4,
      name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
      quantity: 55,
      price: 20000,
      img: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    },
  ];
  constructor() {}
  // step 1
  GetAllProducts() {
    return this.Products;
  }

  GetProductById(prdId: number): any {
    // if it is number or not
    if (isNaN(prdId)) {
      return null;
    }
    const product = this.Products.find(
      (productId: IProduct) => productId.id === prdId
    );
    if (!product) {
      return null;
    }
    return product;
  }
}
