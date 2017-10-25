import { cart } from './storage/cart.reducer';
import * as CartActions from './storage/actions/actions';
import { createStore } from 'redux';

export const cartStore = createStore(cart);
