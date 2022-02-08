import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmPasswordValidator } from '../confirmPassword.Validator';
import { EnrollmentService } from '../Services/enrollment.service';
import { User } from '../user';
import { ForbiddenNameValidator } from '../userName.validator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  topics: string[];
  userModel: User = new User('', '', '', '', '');
  // registerationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     state: new FormControl(''),
  //     city: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });
  registerationForm = this.fb.group(
    {
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          ForbiddenNameValidator(/admin/),
        ],
      ],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        state: [''],
        city: [''],
        postalCode: [''],
      }),
    },
    { validator: [ConfirmPasswordValidator] }
  );
  constructor(private enrollment: EnrollmentService, private fb: FormBuilder) {
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

  loadAPIData() {
    this.registerationForm.patchValue({
      userName: 'Basma',

      address: {
        state: 'Egypt',
        city: 'Qlyoub',
        postalCode: '1111111',
      },
    });
  }
  // get username
  get userName() {
    return this.registerationForm.get('userName');
  }
  ngOnInit(): void {}
}
