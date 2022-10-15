import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Dish, dishes } from '../dishes';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  plate: Dish = {} as Dish;
  index: number = 0;
  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  addToCart() {
    this.orderService.addToCart(this.plate)
    window.alert(`${this.plate.name} has been successfully added to your cart.`);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params["dishIndex"];
      this.plate = dishes[this.index];
    });
  }
}
