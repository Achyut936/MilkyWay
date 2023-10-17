import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
  cartProducts!: any[];
  amount: number = 0;

  ngOnInit() {
    const cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartProducts = JSON.parse(cartData);
    }
    window.paypal.Buttons().render(this.paymentRef.nativeElement);
  }

  calculateTotalBill(): number {
    let total = 0;
    if (this.cartProducts) {
      this.cartProducts.forEach((product) => {
        total += product.qnt * product.price;
      });
    }
    this.amount = total;
    return total;
  }
}
