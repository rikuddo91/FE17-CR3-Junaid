import { Component, OnInit } from '@angular/core';
import { Dish, dishes } from '../dishes';
import { OrderService } from '../order.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  plates: Dish[] = dishes;
  constructor(private orderService: OrderService) {
   
   }

  ngOnInit(): void {
  }

  addToCart(x: number){
    console.log(x)
    this.orderService.addToCart(this.plates[x]);
    window.alert(`${this.plates[x].name} has been added to your cart.`);
  }
}

