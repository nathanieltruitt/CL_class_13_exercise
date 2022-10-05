import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComponentsInputExerciseComponent } from './nested-components-input-exercise.component';

describe('NestedComponentsInputExerciseComponent', () => {
  let component: NestedComponentsInputExerciseComponent;
  let fixture: ComponentFixture<NestedComponentsInputExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedComponentsInputExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedComponentsInputExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
