import { CartService } from './../../services/cart.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private cart: CartService) { }

  @ViewChild('checkoutModal')
  private modal: any;

  public actionOnSubmit(): void {
    this.cart.emptyCart();
    this.modal.close();
  }
}
