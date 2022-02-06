import { ICategory } from './../Shared Classes and types/interfaces';
import { DiscountOffers } from './../Shared Classes and types/enums';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Shared Classes and types/interfaces';
import { ProductServiceService } from '../Services/product-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  prodID: any;
  constructor(
    private productService: ProductServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
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
    this.ProductList = [
      {
        id: 1,
        name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        img: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        quantity: 100,
      },
      {
        id: 2,
        name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        img: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        quantity: 200,
      },
      {
        id: 3,
        name: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
        price: 39.99,
        img: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        quantity: 50,
      },
      {
        id: 4,
        name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        img: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        quantity: 100,
      },
      {
        id: 5,
        name: "Opna Women's Short Sleeve Moisture",
        price: 56.99,
        img: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        quantity: 100,
      },
      {
        id: 6,
        name: 'DANVOUY Womens T Shirt Casual Cotton Short',
        price: 56.99,
        img: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        quantity: 100,
      },
      {
        id: 7,
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 56.99,
        img: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        quantity: 100,
      },
      {
        id: 8,
        name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 56.99,
        img: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        quantity: 100,
      },
    ];
    this.ClientName = 'Client One';
    this.IsPurshased = true;
  }
  toggleTable(): void {
    this.IsPurshased = !this.IsPurshased;
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.prodID = params.get('id');
    });
  }
  renderValues() {
    this.ProductList = this.productService.GetAllProducts();
  }

  goToProductDetails(item: any) {
    // navigate to department deatils and send id in the url
    this.router.navigate(['/Products', item.id]);
  }

  isSelected(item: any) {
    return parseInt(item.id) === parseInt(this.prodID);
  }

  goToProductsWithDiscount() {
    this.router.navigate(['ProductsWithDiscount'], {
      relativeTo: this.activatedRoute,
    });
  }

  goToProductsWithoutDiscount() {
    this.router.navigate(['ProductsWithoutDiscount'], {
      relativeTo: this.activatedRoute,
    });
  }
}
