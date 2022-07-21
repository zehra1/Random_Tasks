import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Gadget } from '../gadget.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: Gadget;
  @Output() clickedGadget: EventEmitter<Gadget> = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleDetails() {
    this.router.navigate(['/gadget', this.item.id]);
  }

  handleEdit() {
    this.router.navigate(['/add', this.item.id]);
  }

  handleDelete() {
    this.clickedGadget.emit(this.item);
  }
}
