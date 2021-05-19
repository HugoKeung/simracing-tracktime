import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarPageComponent } from './car-page/car-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { TrackPageComponent } from './track-page/track-page.component';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'track/:id', component: TrackPageComponent },
  { path: 'car/:id', component: CarPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: ErrorPageComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
