import { Product } from './models/product';
import { CartData } from './modules/shoping-cart/storage/actions/cart.action.data';
import { CartAction } from './modules/shoping-cart/storage/actions/cart.action';
import { Component, OnInit } from '@angular/core';
import * as CartActions from './modules/shoping-cart/storage/actions/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
