import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
    
    
  }

  updateCartStatus() {
    console.log('entered update');
    //subscribe to cart status totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    //subscribe to cart status totalPrice
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

  onSubmit() {
    console.log("Handling the submit button");
    console.log(this.checkoutFormGroup.get('customer').value);
  }

  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
      number: form.cardNumber.value,
      exp_month: form.expMonth.value,
      exp_year: form.expYear.value,
      cvc: form.cvc.value
    }, (status: number, response: any) => {
      if (status === 200) {
        let stripeToken = response.id;
        this.chargeCard(stripeToken);
      } else {
        console.log(response.error.message);
      }
    });
  }

  chargeCard(stripeToken: string) {
    let cart = this.cartService.cartItems;
    for(let currentCartItem of cart) {
      this.totalPrice += currentCartItem.quantity * currentCartItem.price;
    }
    
    let totalString = this.totalPrice.toString();
    

    const headers = new HttpHeaders({'token': stripeToken, 'amount': totalString, 'Content-Type':  'application/json'});
    this.http.post('http://localhost:8080/payment/charge', {}, {headers: headers})
      .subscribe(resp => {
        console.log(resp);
      })
  }


}
