import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TracksPageComponent } from './tracks-page/tracks-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { PopularTableComponent } from './popular-table/popular-table.component';
import { TrackTableComponent } from './track-table/track-table.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { TrackPresentComponent } from './track-present/track-present.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileTableComponent } from './profile-table/profile-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TracksPageComponent,
    HomePageComponent,
    SubmitFormComponent,
    FilterFormComponent,
    PopularTableComponent,
    TrackTableComponent,
    RequestFormComponent,
    TrackPresentComponent,
    ErrorPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    ProfileTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
