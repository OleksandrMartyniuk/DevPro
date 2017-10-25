import { CartEntry } from './../../../models/cart-entry';

export class CartStorage {
    public cart: Array<CartEntry>;
    public cartSummary: number;
}
