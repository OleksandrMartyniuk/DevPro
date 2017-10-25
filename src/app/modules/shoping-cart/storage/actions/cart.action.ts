import { CartData } from './cart.action.data';
import { Product } from './../../../../models/product';
import { CartEntry } from './../../../../models/cart-entry';
import * as CartActions from './actions';

export class CartAction {
    constructor(public type: string, public data: CartData) {

    }
}
