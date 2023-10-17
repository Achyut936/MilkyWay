import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    AboutUsComponent,
    ProductsComponent,
    CartComponent,
    WishListComponent,
    CheckoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
