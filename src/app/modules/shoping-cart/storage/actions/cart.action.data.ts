import { Product } from './../../../../models/product';

export class CartData {
    constructor(product: Product, quantity?: number) {
        this.product = product;
        this.quantity = quantity ? quantity : 0;
    }
    public product: Product;
    public quantity: number;
}
