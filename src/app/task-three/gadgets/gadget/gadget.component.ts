import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gadget } from '../../gadget.model';

@Component({
  selector: 'app-gadget',
  templateUrl: './gadget.component.html',
  styleUrls: ['./gadget.component.scss'],
})
export class GadgetComponent implements OnInit {
  gadget: Gadget;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = parseInt(
      this.activatedRoute.snapshot.paramMap.get('id') || '-1'
    );
    const gadgets = JSON.parse(localStorage.getItem('gadgets') || '');
    this.gadget = gadgets.find((g) => g.id == id);
    console.log(this.gadget);
  }
}
