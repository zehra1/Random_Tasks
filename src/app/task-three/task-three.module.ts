import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskThreeAddComponent } from './task-three-add/task-three-add.component';
import { TaskThreeRoutingModule } from './task-three-routing.module';
import { TaskThreeComponent } from './task-three.component';
import { CardComponent } from './card/card.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { GadgetComponent } from './gadgets/gadget/gadget.component';

@NgModule({
  declarations: [TaskThreeComponent, TaskThreeAddComponent, CardComponent, GadgetsComponent, GadgetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaskThreeRoutingModule,
  ],
})
export class TaskThreeModule {}
