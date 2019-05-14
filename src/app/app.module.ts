import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavBarComponent } from './global/nav-bar/nav-bar.component';
import { CardComponent } from './shared/card/card.component';
import { CourseCardComponent } from './shared/course-card/course-card.component';
import { ReviewCardComponent } from './shared/review-card/review-card.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardComponent,
    CourseCardComponent,
    ReviewCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
