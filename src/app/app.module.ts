import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RoutingComponents } from './app-routing.module';
import { FirstFiveOrdersComponent } from './order-dashboard/first-five-orders/first-five-orders.component';
import { AllOtherOrdersComponent } from './order-dashboard/all-other-orders/all-other-orders.component';
import { LotteryWinningOrderComponent } from './order-dashboard/lottery-winning-order/lottery-winning-order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './basic-custom-property-exercise/user/user.component';
import { MyProfileComponent } from './nested-components-input-exercise/my-profile/my-profile.component';
import { PostsComponent } from './nested-components-input-exercise/posts/posts.component';
import { UserTwoComponent } from './ngfor-input-decorator-exercise/user-two/user-two.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FirstFiveOrdersComponent,
    AllOtherOrdersComponent,
    LotteryWinningOrderComponent,
    NavbarComponent,
    UserComponent,
    MyProfileComponent,
    PostsComponent,
    UserTwoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
