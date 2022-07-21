import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskThreeComponent } from './task-three/task-three.component';
import { TaskTwoComponent } from './task-two/task-two.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'task-one',
  },
  {
    path: 'task-one',
    component: TaskOneComponent,
  },
  {
    path: 'task-two',
    component: TaskTwoComponent,
  },
  {
    path: 'task-three',
    loadChildren: () =>
      import('./task-three/task-three.module').then((m) => m.TaskThreeModule),
    // component: TaskThreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
