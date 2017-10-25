import { CartService } from './../../services/cart.service';
import { CartEntry } from './../../../../models/cart-entry';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-cart-entry',
  templateUrl: './cart-entry.component.html',
  styleUrls: ['./cart-entry.component.css']
})
export class CartEntryComponent implements OnInit {

  constructor(private cart: CartService) { }

  @Input()
  public entry: CartEntry;

  private count: number;

  ngOnInit() {
    this.count = this.entry.count;
  }

  private onInput(e: Event): void {
    const count = parseFloat((e.target as HTMLInputElement).value);

    if (!count && count !== 0) {
      this.count = this.entry.count;
    } else {
      this.cart.setQuantity(this.entry.item, count);
    }
  }

}
