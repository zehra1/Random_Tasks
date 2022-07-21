import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskThreeAddComponent } from './task-three-add.component';

describe('TaskThreeAddComponent', () => {
  let component: TaskThreeAddComponent;
  let fixture: ComponentFixture<TaskThreeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskThreeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskThreeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
