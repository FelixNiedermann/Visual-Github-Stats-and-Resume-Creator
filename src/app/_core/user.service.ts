import { Injectable } from '@angular/core';
import { User } from '../_types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string = "";
  user: User = {
    login: ""
  };

  constructor(private http: HttpClient) { }

  setUsername(username: string) {
    this.username = username;
  }

  getUsername(): string {
   return this.username; 
  }
  getUser(username: string) {
    return this.http.get(`https://api.github.com/users/${username}`); 
  }

  getRepos(username: string) {
    return this.http.get(`https://api.github.com/users/${username}/repos?per_page=100`);
  }

  getRateLimit() {
    return this.http.get(`https://api.github.com/rate_limit`);
  }

  getLang(languages_url: string) {
    return this.http.get(languages_url);
   /* var repos: any = [];
    var languages: any = []
    repos = this.getRepos(username);
    repos.forEach((repo: { language_url: string; }) => {
       return this.http.get(repo.language_url);
    });*/
  }
  /*getUser(un: string) {
    
    let url = "https://api.github.com/users/" + un

    this.http.get(url)
    .subscribe(data => this.user = {
      login: (data as User).login,
      name: (data as User).name,
     });
     
    return this.user;
  }*/

  /*setUser(user: User) {
    this.user = user;
  }*/
}
