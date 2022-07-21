import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gadget } from '../gadget.model';

@Component({
  selector: 'app-task-three-add',
  templateUrl: './task-three-add.component.html',
  styleUrls: ['./task-three-add.component.scss'],
})
export class TaskThreeAddComponent implements OnInit {
  gadgetAddForm = new FormGroup({
    id: new FormControl(null),
    createdAt: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    imgUrl: new FormControl(null),
  });
  allGadgets: Gadget[] = [];
  id = -1;
  formTitle = 'Add new gadget';

  get name() {
    return this.gadgetAddForm.get('name');
  }
  get description() {
    return this.gadgetAddForm.get('description');
  }
  get price() {
    return this.gadgetAddForm.get('price');
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.allGadgets = JSON.parse(
      localStorage.getItem('gadgets') || ''
    ) as Gadget[];
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '-1');

    this._fillForm(this.id);
  }

  private _fillForm(id: any) {
    const gadget = this.allGadgets.find((g) => g.id == id);
    if (this.id > 0) {
      this.formTitle = gadget?.name || '';
    }
    this.gadgetAddForm.patchValue({
      id: gadget?.id,
      createdAt: gadget?.createdAt,
      name: gadget?.name,
      description: gadget?.description,
      price: gadget?.price,
      imgUrl: gadget?.imgUrl,
    });
  }

  onSubmit() {
    if (this.id != -1) {
      const index = this.allGadgets.findIndex((g) => g.id == this.id);
      this.allGadgets[index] = this.gadgetAddForm.value;
    } else {
      this.gadgetAddForm
        .get('id')
        ?.patchValue(this.allGadgets.length + Math.floor(Math.random() * 100));
      this.gadgetAddForm.get('createdAt')?.patchValue(new Date());
      this.allGadgets.push(this.gadgetAddForm.value);
    }
    localStorage.setItem('gadgets', JSON.stringify(this.allGadgets));
    this.router.navigate(['/gadgets']);
  }

  onCancel() {
    this.router.navigate(['/gadgets']);
  }
}
