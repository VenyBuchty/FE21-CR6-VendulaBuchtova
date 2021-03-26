import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { CartService } from '../cart.service';
import { products } from '../products';
import {Location} from '@angular/common';

@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrls: ['./offers-details.component.scss']
})
export class OffersDetailsComponent implements OnInit {
  product: any;
  constructor(private route: ActivatedRoute, private cartService: CartService, private location: Location) { }


  addToCart(product) {
    window.alert('Your dream vacation has been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

  goBack() {
    this.location.back();
  }

}
