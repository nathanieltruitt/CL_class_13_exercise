import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-two',
  templateUrl: './user-two.component.html',
  styleUrls: ['./user-two.component.css'],
})
export class UserTwoComponent implements OnInit {
  @Input() inputUser!: { id: number; username: string };

  constructor() {}

  ngOnInit(): void {}
}
