import { Component, ElementRef } from '@angular/core';
import { CartService } from '../Services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  ngOnInit() {
    this.cartValue = this.cartCount();
  }
  cartValue: number = 0;
  cartCount() {
    const cartData = JSON.parse(localStorage.getItem('localCart') ?? 'null');

    if (cartData !== 'null') {
      var count = cartData.length;
      return count;
    } else {
      return 0;
    }
  }
  constructor(private el: ElementRef, private cart: CartService) {
    this.cart.cartSubject.subscribe((data) => {
      this.cartValue = data;
    });
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
