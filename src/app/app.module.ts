import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './components/home/home.component';
import { InfoCharacterComponent } from './components/info-character/info-character.component';
import { EpisodesComponent } from './components/info-character/episodes/episodes.component';
import { LocationsComponent } from './components/info-character/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    InfoCharacterComponent,
    EpisodesComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
