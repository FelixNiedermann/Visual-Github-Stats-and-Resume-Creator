import { Component, OnInit } from '@angular/core';
import { UserService } from '../_core/user.service';
import { User } from '../_types/user';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  
  username: string = "FelixNiedermann";
  user: any;
  repos: any = [];

  constructor(private userService: UserService) { 
    //this.user.login = this.userService.getUsername();
  }


  ngOnInit(): void {
    this.load()
  }

  load() {    
      const username = this.username;
      this.userService
        .getUser(username)
        .subscribe(user => this.user = user);
      this.userService
        .getRepos(username)
        .subscribe(repos => this.repos = repos)
    //this.user = await this.userService.getUser(this.user.login);
    //console.log(this.user);
  }

}
