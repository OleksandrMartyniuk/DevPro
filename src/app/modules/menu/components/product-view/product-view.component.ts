import { MenuService } from './../../services/menu.service';
import { Product } from './../../../../models/product';
import { ProductCategory } from './../../../../models/product-category';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private menu: MenuService) {
  }

  @Input()
  public products: Product[];

  public ngOnInit() {
    this.route.data.subscribe((data) => this.getProducts(data.category));
  }

  public getProducts(cat: string): void {
    this.menu.getProductCategoryData(cat)
      .subscribe((value: ProductCategory): void => {
        this.products = value.products;
      });
  }
}
