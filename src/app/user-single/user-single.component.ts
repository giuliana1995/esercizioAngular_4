import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Userlist } from '../models/interface-user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() index!: number;
  @Input() listUsers!: Userlist;
  @Output() newItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
