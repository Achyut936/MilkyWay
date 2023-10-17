import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  removeSingle(idToDelete: any) {
    if (localStorage.getItem('localCart')) {
      this.getCart = JSON.parse(localStorage.getItem('localCart') ?? 'null');
      for (let i = 0; i < this.getCart.length; i++) {
        if (this.getCart[i].productId === idToDelete) {
          this.getCart.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCart));
          this.findTotal();
          this.cartCountFunc();
        }
      }
    }
  }
  ngOnInit(): void {
    this.cartDetails();
  }

  getCart: any = [];
  total: number = 0;

  cartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCart = JSON.parse(localStorage.getItem('localCart') || '[]');
      this.findTotal(); 
    }
  }

  decrementQuantity(product: any) {
    if (product.qnt > 1) {
      product.qnt--;
      this.updateLocalStorage();
      this.findTotal(); 
    } else {
      alert('Quantity cannot be less than 1');
    }
  }

  incrementQuantity(product: any) {
    if (product.qnt < 5) {
      product.qnt++;
      this.updateLocalStorage();
      this.findTotal(); 
    } else {
      alert('Quantity cannot be more than 5');
    }
  }

  updateLocalStorage() {
    localStorage.setItem('localCart', JSON.stringify(this.getCart));
  }

  findTotal() {
    this.total = this.getCart.reduce(function (acc: any, val: any) {
      return acc + val.price * val.qnt;
    }, 0);
  }
  clearCart() {
    localStorage.removeItem('localCart');
    this.getCart = [];
    this.total = 0;
    this.cartCount = 0;
    this.cart.cartSubject.next(this.cartCount);
  }

  constructor(private cart: CartService) {}

  cartCount: number = 0;
  cartCountFunc() {
    var cartValue = JSON.parse(localStorage.getItem('localCart') ?? 'null');

    this.cartCount = cartValue.length;
    this.cart.cartSubject.next(this.cartCount);
  }
}
