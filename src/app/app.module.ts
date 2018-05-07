import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlayerComponent } from './player/player.component';
import { SafePipe } from './safe.pipe';
import { ApiOverwatchServiceService } from './api-overwatch-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PlayerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    ApiOverwatchServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
