import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { Livestock } from 'src/app/common/livestock';
import { CartService } from 'src/app/services/cart.service';
import { LivestockService } from 'src/app/services/livestock.service';

@Component({
  selector: 'app-livestock-list',
  templateUrl: './livestock-list.component.html',
  styleUrls: ['./livestock-list.component.css']
})
export class LivestockListComponent implements OnInit {

  stockList: Livestock[];

  constructor(private stockService: LivestockService, private cs: CartService) { }

  ngOnInit(): void {
    this.listLivestock();
  }

  listLivestock() {
    this.stockService.getLivestockList().subscribe(
      data => {
        this.stockList = data;
      }    
    )
  }

  addToCart(theStock: Livestock){
    const theCartItem = new CartItem(theStock);
    this.cs.addToCart(theCartItem);
  }
}
