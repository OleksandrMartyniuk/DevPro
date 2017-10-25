import { Product } from './product';

export class ProductCategory {
    constructor(name: string, products: Array<Product>) {
        this.name = name;
        this.products = [];
        products.forEach((product): void => {
            this.addProduct(product);
        });
    }

    public name: string;
    public products: Array<Product>;

    public addProduct(prod: Product): void {
        if (this.products.indexOf(prod) < 0) {
            this.products.push(prod);
            if (prod.categories.indexOf(this.name) < 0) {
                prod.categories.push(this.name);
            }
        }
    }

    public removeProduct(prod: Product): void {
        const prodInd: number = this.products.indexOf(prod);
        if (prodInd >= 0) {
            this.products.splice(prodInd, 1);
            const catInd: number = prod.categories.indexOf(this.name);
            if (catInd >= 0) {
                prod.categories.splice(catInd, 1);
            }
        }
    }
}
