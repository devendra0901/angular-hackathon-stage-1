  /* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  // constructor() { }

  public started: boolean;

  // public stopwatchService: StopWatchService;

  public time: number;
  public autoStart = true;

  private timer: any;

  constructor(public stopwatchService: TimerService) {
      // timer service
      this.stopwatchService = stopwatchService;
      this.time = 0;
      this.started = false;
      if (this.autoStart) {
        this.start();
      }

      Observable.interval(1)
      .subscribe(x => {
      this.stop_on_this(999 * 60 * 90); }
    );
}



  formatTime(timeMs: number) {
      let minutes: string,
          seconds: string;

      minutes = Math.floor(timeMs / 60000).toString();
      seconds = ((timeMs % 60000) / 1000).toFixed(3);
    //   console.log(+minutes);
    //   if (+minutes === 2) {
    //       console.log(+minutes);
    //       this.stop();
    //   }
      return minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
  }

  getUpdate() {
      // let self = this;

      return () => {
          this.time = this.stopwatchService.time();
        //   console.log('get update:');
        //   console.log(this.time);
      };
  }

  lap() {
      this.update();

      if (this.time) {
          this.stopwatchService.lap();
      }
  }

  reset() {
      this.stopwatchService.reset();
      this.started = false;
      this.update();
  }

    stop_on_this(at_this_time): void {
        if ( this.time >= at_this_time)  {
            // console.log('hekk');
            this.reset();
        }
    }
  start() {
      this.timer = setInterval(this.getUpdate(), 1);
      this.stopwatchService.start();
        //    stop once time finished
        // Observable.interval(1000 * 2)
        // .subscribe(x => {
        //     this.stop(); }
        // );
  }

  stop() {
      clearInterval(this.timer);
      this.stopwatchService.stop();
  }

  toggle() {
      if (this.started) {
          this.stop();
      } else {
          this.start();
      }

      this.started = !this.started;
  }

  update() {
      this.time = this.stopwatchService.time();
  }

  onClick() {
      console.log(this.stopwatchService);
  }

  ngOnInit() {
  }
}
