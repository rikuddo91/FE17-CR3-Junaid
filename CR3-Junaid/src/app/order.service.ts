import { Injectable } from '@angular/core';
import { Dish } from './dishes';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items: Dish[] = [];
  constructor() { }

  addToCart(element: Dish) {
    this.items.push(element);
  }

  getElements() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  calcTotalProd() {
    let total: number = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total
  }

  calcService() {
    return (this.calcTotalProd() * 0.1);
  }

  calcDiscount() {
    let totalProdAndServ = this.calcTotalProd() + this.calcService();
    if (totalProdAndServ > 40) {
      return (totalProdAndServ * 0.15)
    }
    return 0
  }

  calcTotalSum() {
    let totalProdAndServ = this.calcTotalProd() + this.calcService();
    if (totalProdAndServ > 40) {
      return (totalProdAndServ - totalProdAndServ * 0.15);
    }
    return totalProdAndServ
  }

 
}
