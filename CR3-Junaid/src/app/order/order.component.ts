import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Dish, dishes } from '../dishes';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cartItems: Dish[] = [];
  plate: Dish = {} as Dish;
  index: number = 0;
  totalProd: number = 0;
  totalSum: number = 0;
  service: number = 0;
  discount: number = 0;
  constructor(private orderServ: OrderService) { };

  checkOutForm = new FormGroup({
    name: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
  });


  onPurchase() {
    const alertItems = [];
    const tempCartContent = this.orderServ.items;
    for (const item of tempCartContent) {

      let items = item.name;
      alertItems.push(items);
    }
    
    let a: any = this.checkOutForm.value;
    console.log(a)

    if (this.checkOutForm.valid) {
      window.alert(`Thank you for your order. You've purchased the following products:\n${alertItems.join("\n")}\nThe dishes will be delievered to the following adress: \n${a.address}`);


    } else {
      window.alert(`Some of the order data are not correct, please try again.`)
    }
    this.cartItems = this.orderServ.clearCart();
    this.checkOutForm.reset();
  }

  ngOnInit(): void {
    this.cartItems = this.orderServ.getElements();
    this.totalProd = this.orderServ.calcTotalProd();
    this.service = this.orderServ.calcService();
    this.discount = this.orderServ.calcDiscount();
    this.totalSum = this.orderServ.calcTotalSum();
  }

}
