import { ICategory } from './../Shared Classes and types/interfaces';
import { DiscountOffers } from './../Shared Classes and types/enums';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Shared Classes and types/interfaces';
import { ProductServiceService } from '../Services/product-service.service';

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
  showTable: boolean = false;

  constructor(private productService: ProductServiceService) {
    this.Discount = DiscountOffers.tenDiscount;
    this.storeName = 'StoreAppName';
    this.storeLogo = '../../assets/images/logoStoreImage.jpg';
    this.CategoryList = [
      {
        id: 1,
        name: 'Category One',
      },
      {
        id: 2,
        name: 'Category Two',
      },
    ];
    this.ClientName = 'Client One';
    this.IsPurshased = true;
  }
  toggleTable(): void {
    this.IsPurshased = !this.IsPurshased;
  }
  ngOnInit(): void {}
  renderValues() {
    this.ProductList = this.productService.GetAllProducts();
  }
}
