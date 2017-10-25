import { Product } from './product';

export class CartEntry {
    constructor(item: Product, count?: number) {
        this.item = item;
        this.count = count ? count : 1;
    }

    public item: Product;
    public count: number;
}
