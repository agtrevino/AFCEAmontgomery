import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UpcomingCoursesComponent } from './upcoming-courses/upcoming-courses.component';
import { CorporateTrainingComponent } from './corporate-training/corporate-training.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { AgileManifestoComponent } from './agile-manifesto/agile-manifesto.component';
import { MeetTheInstructorsComponent } from './meet-the-instructors/meet-the-instructors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainNavComponent,
    HeaderComponent,
    FooterComponent,
    UpcomingCoursesComponent,
    CorporateTrainingComponent,
    AgileManifestoComponent,
    MeetTheInstructorsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
