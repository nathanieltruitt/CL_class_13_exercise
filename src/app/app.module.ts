import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingComponents } from './app-routing.module';
import { FirstFiveOrdersComponent } from './order-dashboard/first-five-orders/first-five-orders.component';
import { AllOtherOrdersComponent } from './order-dashboard/all-other-orders/all-other-orders.component';
import { LotteryWinningOrderComponent } from './order-dashboard/lottery-winning-order/lottery-winning-order.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FirstFiveOrdersComponent,
    AllOtherOrdersComponent,
    LotteryWinningOrderComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
