import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GadgetComponent } from './gadgets/gadget/gadget.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { TaskThreeAddComponent } from './task-three-add/task-three-add.component';
import { TaskThreeComponent } from './task-three.component';

export const routes: Routes = [
  {
    path: '',
    component: TaskThreeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'gadgets',
      },
      {
        path: 'gadgets',
        component: GadgetsComponent,
      },
      {
        path: 'add',
        component: TaskThreeAddComponent,
      },
      {
        path: 'add/:id',
        component: TaskThreeAddComponent,
      },
      {
        path: 'gadget/:id',
        component: GadgetComponent,
      },
    ],
  },
  // {
  //   path: 'gadgets',
  //   component: TaskThreeComponent,
  // },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class TaskThreeRoutingModule {}
