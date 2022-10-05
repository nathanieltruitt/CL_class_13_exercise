import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { BasicCustomPropertyExerciseComponent } from './basic-custom-property-exercise/basic-custom-property-exercise.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrderDashboardComponent,
  },
  {
    path: 'basic-custom-property',
    component: BasicCustomPropertyExerciseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  OrderDashboardComponent,
  BasicCustomPropertyExerciseComponent,
];
