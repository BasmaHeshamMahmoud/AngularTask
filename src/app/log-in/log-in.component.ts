import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../login-user';
import { EnrollmentService } from '../Services/enrollment.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  logUser: LoginUser = new LoginUser('', '');

  constructor(private enrollment: EnrollmentService) {}

  onSubmit() {
    console.log(this.logUser);
    this.enrollment.login(this.logUser).subscribe(
      (res) => {
        console.log('Success', res);
      },
      (error) => {
        console.log('Erorr', error);
      }
    );
  }

  ngOnInit(): void {}
}
