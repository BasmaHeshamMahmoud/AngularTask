import { ProductsComponent } from './products/products.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angDemo';
  @ViewChild(ProductsComponent) child: ProductsComponent;
  listProducts() {
    this.child.renderValues();
  }
  toggleProducts() {
    this.child.toggleTable();
  }
}
