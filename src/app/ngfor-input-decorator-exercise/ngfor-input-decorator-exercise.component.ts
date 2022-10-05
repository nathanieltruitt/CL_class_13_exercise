import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-input-decorator-exercise',
  templateUrl: './ngfor-input-decorator-exercise.component.html',
  styleUrls: ['./ngfor-input-decorator-exercise.component.css'],
})
export class NgforInputDecoratorExerciseComponent implements OnInit {
  users: Array<{ username: string; id: number }> = [
    {
      username: 'johncena18',
      id: 1,
    },
    {
      username: 'keanureeves19',
      id: 2,
    },
    {
      username: 'marypoppins20',
      id: 3,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
