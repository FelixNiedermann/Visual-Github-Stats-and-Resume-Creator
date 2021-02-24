import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { UserService } from './_core/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = "Test";

  constructor(private userService: UserService, private r: Router) { }

  searchClick() {
    this.userService.setUsername(this.username)
  }
}
