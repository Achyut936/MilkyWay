import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: MainPageComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'f', component: FooterComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
