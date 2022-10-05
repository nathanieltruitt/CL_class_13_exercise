import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-custom-event-exercise',
  templateUrl: './basic-custom-event-exercise.component.html',
  styleUrls: ['./basic-custom-event-exercise.component.css'],
})
export class BasicCustomEventExerciseComponent implements OnInit {
  searchResults!: string;

  constructor() {}

  ngOnInit(): void {}
}
