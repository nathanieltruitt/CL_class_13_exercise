import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css'],
})
export class OrderDashboardComponent implements OnInit {
  orders: number[] = [];
  interval!: NodeJS.Timer;
  constructor() {}

  ngOnInit(): void {}

  generateOrders() {
    this.interval = setInterval(() => {
      this.orders.push((this.orders[this.orders.length - 1] || 0) + 1);
    }, 500);
  }

  stopOrders() {
    clearInterval(this.interval);
  }
}
