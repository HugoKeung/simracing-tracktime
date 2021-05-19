import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
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
import { TrackPageComponent } from './track-page/track-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteDropdownComponent } from './autocomplete-dropdown/autocomplete-dropdown.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from '@angular/material/table'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatInputModule} from '@angular/material/input'; 
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,

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
    ProfileTableComponent,
    TrackPageComponent,
    CarPageComponent,
    SearchBarComponent,
    AutocompleteDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
