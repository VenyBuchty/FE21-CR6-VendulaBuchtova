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

  cartTotal = 0
  constructor(private cartService: CartService, private location: Location) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.items.forEach(item => {
      this.cartTotal += item.price
    })
  }

  goBack() {
    this.location.back();
  }
  
 

}
