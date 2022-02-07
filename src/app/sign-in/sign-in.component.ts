import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../Services/enrollment.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  topics: string[];
  userModel: User = new User('', '', '', '', '');
  constructor(private enrollment: EnrollmentService) {
    this.topics = ['Facebook', 'Twitter', 'Google'];
    // this.userModel = new User(
    //   'Basma',
    //   'basma@basma.com',
    //   '123456789',
    //   '123456789',
    //   'Facebook'
    // );
  }

  onSubmit() {
    console.log(this.userModel);
    this.enrollment.enroll(this.userModel).subscribe(
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
