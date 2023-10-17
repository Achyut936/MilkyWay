import { Component, ElementRef } from '@angular/core';
import {CartService} from '../Services/cart.service'
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  cartCount:number=0;
  cartCountFunc()
  {
    var cartValue=JSON.parse(localStorage.getItem('localCart') ?? 'null')
    
    this.cartCount=cartValue.length;
    this.cart.cartSubject.next(this.cartCount)
  }


  incQnt(product: any)
  {
    
    if(product.qnt<5)
    {product.qnt++;}
    else{
      alert("Product Quantity cannot be greater than 5")
    }
    
  }
  decQnt(product: any){
    if(product.qnt>1)
    {
      product.qnt--;
    }
  }

  addToCart(product: any) {
    let cartData = localStorage.getItem('localCart');
    if (cartData === null) {
      let cartArray: any[] = [];
      cartArray.push(product);
      localStorage.setItem('localCart', JSON.stringify(cartArray));
    } else {
      let cartArray: any[] = JSON.parse(cartData);
      const existingProduct = cartArray.find((p) => p.productId === product.productId);
      if (existingProduct) {
        existingProduct.qnt += product.qnt;
      } else {
        cartArray.push(product);
      }
      localStorage.setItem('localCart', JSON.stringify(cartArray));
    }
    
    // Display the alert message
    alert(`${product.product} added to cart`);
    this.cartCountFunc()
  }
  
  constructor(private el: ElementRef,private cart:CartService) {}

  scrollToSection(sectionId: string) {
    const section = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  saveForLater(product: any) {
    debugger;
    let saveForLaterData = localStorage.getItem('saveForLater');
    if (saveForLaterData === null) {
      let saveForLaterArray: any[] = [];
      saveForLaterArray.push(product);
      localStorage.setItem('saveForLater', JSON.stringify(saveForLaterArray));
    } else {
      let saveForLaterArray: any[] = JSON.parse(saveForLaterData);
      const existingProduct = saveForLaterArray.find((p) => p.productId === product.productId);
      if (!existingProduct) {
        saveForLaterArray.push(product);
        localStorage.setItem('saveForLater', JSON.stringify(saveForLaterArray));  
      }
    }
  
    
    this.removeFromCart(product);
  
    
    alert(`${product.product} saved for later`);
    this.cartCountFunc();
  }
  

  removeFromCart(product: any) {
    const cartData = localStorage.getItem('localCart');
    if (cartData) {
      const cartArray: any[] = JSON.parse(cartData);
      const index = cartArray.findIndex((p) => p.productId === product.productId);
      if (index !== -1) {
        cartArray.splice(index, 1);
        localStorage.setItem('localCart', JSON.stringify(cartArray));
      }
    }
  }
  productArr=[{img:'assets/images/milkcart.jpg',price:70 ,product:'Milk',qnt:1,cat:'milk',productId:1},{img:'assets/images/coconutMilk.avif',price:400 ,product:'Coconut Milk',qnt:1,cat:'milk',productId:2},{img:'assets/images/fullCream.avif',price:50 ,product:'Full Cream Milk',qnt:1,cat:'milk',productId:3},{img:'assets/images/soyaMilk.avif',price:135 ,product:'Soya Milk',qnt:1,cat:'milk',productId:4},{img:'assets/images/srikhand.avif',price:65 ,product:'Curd',qnt:1,cat:'curd',productId:5},{img:'assets/images/curpP.avif',price:55 ,product:'Blue Berry Yougurt',qnt:1,cat:'curd',productId:6},{img:'assets/images/mishtiDoi.avif',price:70 ,product:'Mishti Doi',qnt:1,cat:'curd',productId:7},{img:'assets/images/mangoCurd.avif',price:65 ,product:'Mango Yougurt',qnt:1,cat:'curd',productId:8},{img:'assets/images/breadP.avif',price:52 ,product:'Brown Bread',qnt:1,cat:'bread',productId:9},{img:'assets/images/multigrainBread.avif',price:75 ,product:'Multigrain Bread',qnt:1,cat:'bread',productId:10},{img:'assets/images/burgerBun.avif',price:45 ,product:'Burger Bun',qnt:1,cat:'bread',productId:11},{img:'assets/images/pav.avif',price:60 ,product:'Pav',qnt:1,cat:'bread',productId:12}];
}
