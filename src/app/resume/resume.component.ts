import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { UserService } from '../_core/user.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  username: string = 'FelixNiedermann';
  user: any;
  repos: any = [];
  languages: any = [];
  language: any = [];
  lang: any = []

  isLoading: boolean = true;
  requests: any;

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType: ChartType = 'pie';


  constructor(private userService: UserService) {
    //this.user.login = this.userService.getUsername();
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.isLoading = true;
    this.user = null;
    const username = this.username;
    this.userService.getUser(username).subscribe((user) => (this.user = user));
    this.userService
      .getRepos(username)
      .subscribe((repos) => {
        this.repos = repos;
        this.loadLanguages();
        this.isLoading = false;
      })
      this.getRateLimit();
    /* this.userService
          .getLang(username)
          .subscribe((languages: any) => this.languages = languages)*/
    
    

    //this.user = await this.userService.getUser(this.user.login);
    //console.log(this.user);
  }

  getRateLimit() {
    this.userService.getRateLimit()
    .subscribe((requests : any) => {
      this.requests = requests.rate.remaining;
    })
  }

  loadLanguages() {
    this.languages = [];
    this.repos.forEach((repo: any) => {
      //this.languages.push(repo.language);
      this.userService
        .getLang(repo.languages_url)
        //.subscribe((language: any) => (this.language = language));
        .subscribe((language: any) => {
          /*Object.entries(language).map((key) => {
            console.log(language);
            this.languages.push(key);
          })*/
          

          Object.keys(language).map((key) => {
            var count = this.languages.reduce((n: number) => {
                return n + 1;
            }, 0);
            this.languages.push(key);
          })
          
          this.countLanguages();
          //console.log(this.lang);
          /*this.language = language;
          this.languages.push(language.keys);*/
          
          //this.languages = this.languages.filter((element: any, i: any) => i === this.languages.indexOf(element))
        });
        //console.log(this.language);
    });
  }

  countLanguages() {

    this.lang = [];
    let count = 0;
    this.languages.forEach((l :any ) => {
      let count2 = 0;
        let has = false;
        this.lang.forEach((lang : any) => {
          if (lang[0] == l) {
            has = true;
            this.lang[count2] = [this.lang[count2][0], this.lang[count2][1] + 1];
          }
          count2++;
        })
        if(has == false){
          this.lang.push([l, 1]);
        }
      count++;
    })

    console.log(this.lang);

    this.loadLanguageChart();
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };


   loadLanguageChart() {
     let labels: any[] = []
     let data: any[] = []

     this.lang = this.lang.sort((a: number[],b: number[]) => {
       return a[0] - b[0];
     })

     this.lang.forEach((lang: any) => {
       labels.push(lang[0]);
       data.push(lang[1]);
     })
      this.doughnutChartLabels = labels.slice(0, 10);
      this.doughnutChartData = data.slice(0, 10);
   }
}
