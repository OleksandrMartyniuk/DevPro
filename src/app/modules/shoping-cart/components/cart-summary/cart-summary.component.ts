import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  constructor(private cart: CartService) { }

  private summary: number;

  public ngOnInit(): void {
    this.summary = 0;
    this.cart.onStoreChange.subscribe(this.onCartUpdated.bind(this));
  }

  private onCartUpdated(): void {
    this.summary = this.cart.getState().cartSummary;
  }
}
