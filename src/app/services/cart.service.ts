import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if(this.cartItems.length > 0) {
      for(let TempCartItem of this.cartItems) {
        if(TempCartItem.stock_id == theCartItem.stock_id) {
          existingCartItem = TempCartItem;
          break;
        }
      }
    }

    alreadyExistsInCart = (existingCartItem != undefined);
    if(alreadyExistsInCart) {
      existingCartItem.quantity++;
    }
    else {
      this.cartItems.push(theCartItem);
    }
    this.computeCartTotals();
  }

  removeFromCart(theCartItem: CartItem) {
    //get index of the cart item in cartItem array
    const itemIndex = this.cartItems.findIndex(
      tempCartItem => tempCartItem.stock_id == theCartItem.stock_id
    );

    //if exists, remove the item from array at index
    if(itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }

  computeCartTotals() {

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;
    
    for(let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

}
