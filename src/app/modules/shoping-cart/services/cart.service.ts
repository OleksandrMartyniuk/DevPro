import { CartData } from './../storage/actions/cart.action.data';
import { CartAction } from './../storage/actions/cart.action';
import { Product } from './../../../models/product';
import { CartStorage } from './../storage/cart-storage';
import { Injectable, Inject, EventEmitter } from '@angular/core';
import * as CartActions from './../storage/actions/actions';
import { Store } from 'redux';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
    constructor( @Inject('CartStorageProvider') private store: Store<CartStorage>) {
        this.store.subscribe(this.handleStorageUpdate.bind(this));
    }

    public onStoreChange: EventEmitter<CartStorage> = new EventEmitter();

    private handleStorageUpdate() {
        this.onStoreChange.next(this.store.getState());
    }

    public addToCart(prod: Product, count?: number): void {
        const action = { type: CartActions.ADD_TO_CART, data: new CartData(prod, count) };
        this.store.dispatch(action);
    }

    public removeFromCart(prod: Product): void {
        const action = { type: CartActions.REMOVE_FROM_CART, data: new CartData(prod) };
        this.store.dispatch(action);
    }

    public setQuantity(prod: Product, count: number): void {
        const action = { type: CartActions.SET_QUANTITY, data: new CartData(prod, count) };
        this.store.dispatch(action);
    }

    public emptyCart(): void {
        const action = { type: CartActions.EMPTY };
        this.store.dispatch(action);
    }

    public getState(): CartStorage {
        return this.store.getState();
    }
}
