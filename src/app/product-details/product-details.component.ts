import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  prodID: any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.prodID = params.get('id');
    });
  }
  goPrev() {
    let prevID = parseInt(this.prodID) - 1;
    this.router.navigate(['/Products', prevID]);
  }
  goNext() {
    let nextID = parseInt(this.prodID) + 1;
    this.router.navigate(['/Products', nextID]);
  }

  goToProductsList() {
    this.router.navigate(['/Products', { id: this.prodID }]);
  }
}
