import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrderDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [OrderDashboardComponent];
