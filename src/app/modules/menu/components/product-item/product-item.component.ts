import { CartService } from './../../../shoping-cart/services/cart.service';
import { Product } from './../../../../models/product';
import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private cart: CartService, private el: ElementRef) { }

  @Input()
  public prod: Product;

  private element: HTMLElement;

  ngOnInit() {
    this.element = this.el.nativeElement;
    this.element.addEventListener('dblclick', this.onDbclick.bind(this));
  }

  public getImgUrl(): string {
    return this.prod.imgSrc ? `url(${this.prod.imgSrc})` : null;
  }

  public onDbclick() {
    this.cart.addToCart(this.prod, 1);
    console.log(this.cart.getState());
  }

}
