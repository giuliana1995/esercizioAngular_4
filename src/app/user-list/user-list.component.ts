import { Component, OnInit } from '@angular/core';
import { Userlist } from './interface.component';
import { OBJUSER } from './obj-user-list.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  listusers: Userlist[] = OBJUSER;
  

  constructor() { }

  ngOnInit(): void {
  }

}
