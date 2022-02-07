import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../login-user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  logUser: LoginUser = new LoginUser('', '');

  constructor() {}

  onSubmit() {
    console.log(this.logUser);
  }

  ngOnInit(): void {}
}
