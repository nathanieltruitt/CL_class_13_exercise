import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { BasicCustomPropertyExerciseComponent } from './basic-custom-property-exercise/basic-custom-property-exercise.component';
import { NestedComponentsInputExerciseComponent } from './nested-components-input-exercise/nested-components-input-exercise.component';
import { NgforInputDecoratorExerciseComponent } from './ngfor-input-decorator-exercise/ngfor-input-decorator-exercise.component';
import { BasicCustomEventExerciseComponent } from './basic-custom-event-exercise/basic-custom-event-exercise.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrderDashboardComponent,
  },
  {
    path: 'basic-custom-property',
    component: BasicCustomPropertyExerciseComponent,
  },
  {
    path: 'nested-components-input',
    component: NestedComponentsInputExerciseComponent,
  },
  {
    path: 'ngFor-input-decorator',
    component: NgforInputDecoratorExerciseComponent,
  },
  {
    path: 'basic-custom-event',
    component: BasicCustomEventExerciseComponent,
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
  NestedComponentsInputExerciseComponent,
  NgforInputDecoratorExerciseComponent,
  BasicCustomEventExerciseComponent,
];
