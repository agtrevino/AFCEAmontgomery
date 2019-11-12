import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UpcomingCoursesComponent } from './upcoming-courses/upcoming-courses.component';
import { CorporateTrainingComponent } from './corporate-training/corporate-training.component';
import { AgileManifestoComponent } from './agile-manifesto/agile-manifesto.component';
import { MeetTheInstructorsComponent } from './meet-the-instructors/meet-the-instructors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'upcoming-courses',
    component: UpcomingCoursesComponent,
  },
  {
    path: 'corporate-training',
    component: CorporateTrainingComponent
  },
  {
    path: 'the-agile-manifesto',
    component: AgileManifestoComponent
  },
  {
    path: 'meet-the-instructors',
    component: MeetTheInstructorsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
