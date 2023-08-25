import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../shared/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../../shared/cartItem.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
cart!: Cart;

@Input()
shippingCharges: number = 0;

constructor(private cartService: CartService) {
  this.cartService.getCartObservable().subscribe((cart) => {
    this.cart = cart;
  });
}

ngOnInit(): void {
  
}

removeFromCart(cartItem: CartItem) {
  this.cartService.removeFromCart(cartItem.food.id);
}

changeQuantity(cartItem: CartItem, quantityInString: string) {
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id, quantity);
}
}
