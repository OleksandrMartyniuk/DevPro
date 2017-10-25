import { RouterModule } from '@angular/router';
import { MenuModule } from './modules/menu/menu.module';
import { ShoppingCartModule } from './modules/shoping-cart/shopping-cart.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ShoppingCartModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
