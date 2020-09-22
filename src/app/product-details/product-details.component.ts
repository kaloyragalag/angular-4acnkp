import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  //By injecting the ActivatedRoute, you are configuring the component to use a service
  constructor(private route: ActivatedRoute
  , private cartService: CartService) { }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    //The route parameters correspond to the path variables you define in the route. The URL that matches the route provides the productId.
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('prodId')];
  });
  }

}