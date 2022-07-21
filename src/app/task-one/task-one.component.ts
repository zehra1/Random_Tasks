import { Component, OnInit } from '@angular/core';

class Random {
  id: number;
  value: number;
}

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss'],
})
export class TaskOneComponent implements OnInit {
  values: Random[] = [];
  modified: Random[] = [];
  count = 0;
  flag = false;
  mostOccurred = -1;
  constructor() {}

  ngOnInit(): void {
    this.getNext();
  }

  getNext() {
    this.randomArray();
    this.mostOccurred = this.mostOccurrances();
    let i = this.mostOccurred;
    while (!this.flag) {
      i++;
      if (!this.values.some((v) => v.value == i)) {
        let newObj = {
          id: this.values.length + 1,
          value: i,
        } as Random;
        this.modified.push(newObj);
        this.flag = true;
      }
    }
  }

  randomArray() {
    this.mostOccurred = -1;
    this.flag = false;
    this.count = 0;
    this.values = [];
    for (let index = 1; index <= 6; index++) {
      this.values.push({ id: index, value: Math.floor(Math.random() * 5) });
    }
    this.modified = [...this.values];
  }

  mostOccurrances() {
    let value = -1;
    let count = 0;
    this.values.forEach((v) => {
      const valueCount = this.values.filter((x) => x.value == v.value).length;
      if (valueCount > count || (v.value > value && valueCount == count)) {
        value = v.value;
        count = valueCount;
      }
    });
    return value;
  }
}
