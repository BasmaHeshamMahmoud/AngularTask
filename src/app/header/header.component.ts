import { Component, OnInit } from '@angular/core';
import { ICategory } from './../Shared Classes and types/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {
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
  }
  // Add a property in the component class,
  CategoryList: ICategory[];
  imgWidth: number = 50;
  imgHeight: number = 50;
  ngOnInit(): void {}
}
