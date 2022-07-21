import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskThreeComponent } from './task-three/task-three.component';
import { TaskThreeAddComponent } from './task-three/task-three-add/task-three-add.component';
import { TaskThreeModule } from './task-three/task-three.module';

@NgModule({
  declarations: [AppComponent, TaskOneComponent, TaskTwoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TaskThreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
