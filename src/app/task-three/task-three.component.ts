import { Component } from '@angular/core';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.scss'],
})
export class TaskThreeComponent {
  isSidenavOpen = false;
  constructor() {}

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    setTimeout(() => {
      if (this.isSidenavOpen) this.isSidenavOpen = !this.isSidenavOpen;
    }, 3000);
  }
}
