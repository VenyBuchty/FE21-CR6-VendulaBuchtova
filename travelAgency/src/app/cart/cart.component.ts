import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {Location} from '@angular/common';




@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  cartTotal = 0;
  cartSale = 0;
  discountAmount = "";


  constructor(private cartService: CartService, private location: Location) { 

  }


  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.items.forEach(item => {
      this.cartTotal += item.price
    })

    if (this.cartTotal >= 2000) {
            this.cartSale = this.cartTotal * 0.9;
            this.discountAmount = "10%";
        } 
    if (this.cartTotal >= 5000) {
          this.cartSale = this.cartTotal * 0.8;
          this.discountAmount = "20%";
    }


  }




  goBack() {
    this.location.back();
  }
  
  preOrder() {
    alert("Your have pre-ordered successfuly. We will contact you soon.");
  }
  

 

}
