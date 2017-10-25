import { ProductCategory } from './product-category';

export class Product {
    constructor(name: string, price: number, imgSrc?: string) {
        this.name = name;
        this.price = price;
        this.categories = [];
        this.imgSrc = imgSrc;
    }

    public name: string;
    public price: number;
    public categories: Array<string>;
    public imgSrc: string;
}
