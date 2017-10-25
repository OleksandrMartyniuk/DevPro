import { Observable } from 'rxjs/Observable';
import { ProductCategory } from './../../../models/product-category';
import { Injectable } from '@angular/core';
import * as mock from './mock_data';

@Injectable()
export class MenuService {

    // async api;
    public getProductCategoryData(category: string): Observable<ProductCategory> {
        return Observable.create(observer => {
            const cat: ProductCategory = mock.categories_mock.find((c: ProductCategory) => {
                return c.name === category;
            });
            observer.next(cat);
            observer.complete();
        });
    }
}
