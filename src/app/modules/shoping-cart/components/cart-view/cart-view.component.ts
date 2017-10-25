import { CartService } from './../../services/cart.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartEntry } from '../../../../models/cart-entry';
import { CartStorage } from '../../storage/cart-storage';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  constructor(private cart: CartService, private cdr: ChangeDetectorRef) {
  }

  public entries: Array<CartEntry>;
  public summary: number;

  ngOnInit() {
    this.cart.onStoreChange.subscribe(this.onStoreUpdated.bind(this));
  }

  private onStoreUpdated(): void {
    const newState: CartStorage = this.cart.getState();
    this.entries = newState.cart;
    this.summary = newState.cartSummary;
    this.cdr.detectChanges();
  }
}
