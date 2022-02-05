import { UserServiceService } from './../Services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private userService: UserServiceService) {}
  userList: any;
  ngOnInit(): void {
    this.userService.listUsers().subscribe((userData) => {
      this.userList = userData;
    });
  }
}
