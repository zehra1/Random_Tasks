import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.scss'],
})
export class TaskTwoComponent implements OnInit {
  object = {
    first_name: 'Prince',
    last_name: 'Garard',
    email: 'pgarard0@mayoclinic.com',
    address: {
      first: {
        street: 'First Street',
        number: 54,
        city: 'Washington',
      },
      second: {
        street: 'Second Street',
        number: 34,
        city: 'Los Angeles',
      },
    },
  };
  lookupObject;
  pathControlGroup = new FormGroup({
    path: new FormControl(null),
  });
  get path() {
    return this.pathControlGroup.get('path');
  }
  constructor() {}

  ngOnInit(): void {}

  lookup() {
    let paths = this.path?.value.split('.');
    let obj = this.object;
    for (let i = 0; i < paths.length; ++i) {
      if (obj[paths[i]] == undefined) {
        this.lookupObject = { error: 'wrong path' };
        return;
      } else {
        obj = obj[paths[i]];
      }
    }
    this.lookupObject = obj;
  }
}
