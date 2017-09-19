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
  public mustStop = false;
  done_five_ms = false;
    five_ms = 5 * 1000;
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
      this.stop_on_this(1000 * 10);
      this.five_ms_done_check(this.five_ms);
        }
    );
}


  formatTime(timeMs: number) {
      let minutes: string,
          seconds: string;

      minutes = Math.floor(timeMs / 60000).toString();
      seconds = ((timeMs % 60000) / 1000).toFixed(3);
      return minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
  }

  getUpdate() {
      return () => {
          this.time = this.stopwatchService.time();
      };
  }

//   lap() {
//       this.update();

//       if (this.time) {
//           this.stopwatchService.lap();
//       }
//   }

  reset() {
      this.stopwatchService.reset();
      this.started = false;
      this.update();
      this.start();
      this.mustStop = false;
  }

stop_on_this(at_this_time): void {
    if (!this.mustStop) {
        if (this.time >= at_this_time) {
            this.stop();
            this.mustStop = true;
            this.stopwatchService.mustStop_serve = true;
            this.stopwatchService.publishData(true);
        }
    }
}

five_ms_done_check(time_five_ms): void {
    if (this.mustStop === false) {
        if ((this.time % 5000) <= 500) {
            // console.log('done 5 sec');
            this.done_five_ms = true;
        } else {
            this.done_five_ms = false;
        }
    }
}

    start() {
        this.timer = setInterval(this.getUpdate(), 1);
        this.stopwatchService.start();
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

    get_mustStop(): boolean {
        return this.mustStop;
    }

    ngOnInit() {
    }
}
