import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  // Add a property in the component class,
  imgWidth: number = 50;
  imgHeight: number = 50;
  ngOnInit(): void {}
}
