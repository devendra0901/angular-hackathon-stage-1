import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { TimerComponent } from './timer/timer.component';
import { TimerService } from './timer.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TimerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
