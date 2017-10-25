import { CartEntry } from './../../../models/cart-entry';
import { CartData } from './actions/cart.action.data';
import { CartAction } from './actions/cart.action';
import { CartStorage } from './cart-storage';
import * as CartActions from './actions/actions';

export const cart_initial: CartStorage = {
    cart: [],
    cartSummary: 0
};

export const cart: (state: CartStorage, action: CartAction) => CartStorage =
    (state: CartStorage, action: CartAction): CartStorage => {
        if (!state) {
            return cart_initial;
        }
        switch (action.type) {
            case CartActions.ADD_TO_CART:
                return addToCart(state, action.data);
            case CartActions.REMOVE_FROM_CART:
                return setQuantity(state, Object.assign(action.data, { quantity: 0 }));
            case CartActions.SET_QUANTITY:
                return setQuantity(state, action.data);
            case CartActions.EMPTY:
                return Object.assign({}, cart_initial);
            default:
                return state;
        }
    };

function addToCart(state: CartStorage, data: CartData): CartStorage {
    const item = state.cart.find((val: CartEntry): boolean => data.product.name === val.item.name);
    const diffs = item ? { quantity: data.quantity + item.count } : {};
    return setQuantity(state, Object.assign({}, data, diffs));
}

function setQuantity(state: CartStorage, data: CartData): CartStorage {
    const cartUpdated: Array<CartEntry> = state.cart.slice(0);
    const ind: number = state.cart.findIndex((entry: CartEntry): boolean => data.product.name === entry.item.name);
    if (data.quantity <= 0 && ind >= 0) {
        cartUpdated.splice(ind, 1);
    } else if (data.quantity > 0) {
        const entry: CartEntry = new CartEntry(data.product, data.quantity);
        if (ind >= 0) {
            cartUpdated[ind] = entry;
        } else {
            cartUpdated.push(entry);
        }
    }
    const summary = getSummary(cartUpdated);
    const store: CartStorage = Object.assign({}, state, { cart: cartUpdated, cartSummary: summary });
    return store;
}

function getSummary(currentCart: Array<CartEntry>): number {
    let summary = 0;
    currentCart.forEach((value: CartEntry): void => {
        summary = summary + (value.count * value.item.price);
    });
    return summary;
}
