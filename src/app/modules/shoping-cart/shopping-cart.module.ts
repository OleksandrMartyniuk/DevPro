import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartStorage } from './storage/cart-storage';
import { CartService } from './services/cart.service';
import { cartStore } from './cart.store';
import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartEntryComponent } from './components/cart-entry/cart-entry.component';
import { ModalModule } from 'ngx-modal';

export const cartStoreProvider: ValueProvider = {
    provide: 'CartStorageProvider',
    useValue: cartStore
};

@NgModule({
    declarations: [
        CartViewComponent,
        CartSummaryComponent,
        CartEntryComponent,
        CheckoutComponent
    ],
    imports: [
        CommonModule,
        ModalModule
    ],
    exports: [
        CartViewComponent,
        CartSummaryComponent
    ],
    providers: [
        cartStoreProvider,
        CartService,
    ],
})
export class ShoppingCartModule { }
