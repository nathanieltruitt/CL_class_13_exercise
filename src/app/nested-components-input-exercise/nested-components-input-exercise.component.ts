import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-components-input-exercise',
  templateUrl: './nested-components-input-exercise.component.html',
  styleUrls: ['./nested-components-input-exercise.component.css'],
})
export class NestedComponentsInputExerciseComponent implements OnInit {
  myPosts = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5', 'Post 6'];

  constructor() {}

  ngOnInit(): void {}
}
