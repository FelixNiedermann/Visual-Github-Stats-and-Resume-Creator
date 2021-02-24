import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'overview-component', component: OverviewComponent},
  { path: 'resume-component', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
