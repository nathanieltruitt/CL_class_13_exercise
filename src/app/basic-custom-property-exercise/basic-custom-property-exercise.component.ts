import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-custom-property-exercise',
  templateUrl: './basic-custom-property-exercise.component.html',
  styleUrls: ['./basic-custom-property-exercise.component.css'],
})
export class BasicCustomPropertyExerciseComponent implements OnInit {
  name: string = 'Nathan';

  constructor() {}

  ngOnInit(): void {}
}
