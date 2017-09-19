import { Component, OnInit } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    
    start = false;
    title = 'Checkers';
    timer: TimerComponent;

    onClick() {
      this.start = true;
    }
}
