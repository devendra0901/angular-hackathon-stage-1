import { Injectable } from '@angular/core';
import { Subject} from 'rxjs/Subject';

@Injectable()
export class TimerService {
    
    private caseNumber = new Subject<boolean>();
    caseNumber$ = this.caseNumber.asObservable();
//   constructor() { }
  public laps: Lap[];
        
      private startAt: number;
      private lapTime: number;
      timeMs: any;
      mustStop_serve = false;
      constructor() {
          this.reset();
      }
        publishData(data: boolean){
            this.caseNumber.next(data);
        }
      lap() {
           this.timeMs = this.startAt
                  ? this.lapTime + this.now() - this.startAt
                  : this.lapTime;

          this.laps[this.laps.length - 1].stop(this.timeMs);
          this.laps.push(new Lap(this.timeMs));
      }

      now() {
          return _now();
      }

      reset() {
          this.startAt = 0;
          this.lapTime = 0;

          this.laps = new Array<Lap>();
          this.laps.push(new Lap(0));
      }

      start() {
          this.startAt = this.startAt
              ? this.startAt
              : this.now();
      }

      stop() {
           this.timeMs = this.startAt
                  ? this.lapTime + this.now() - this.startAt
                  : this.lapTime;

          this.lapTime = this.timeMs;
          this.laps[this.laps.length - 1].stop(this.timeMs);

          this.startAt = 0;
      }

      time() {
          return this.lapTime
              + (this.startAt ? this.now() - this.startAt : 0);
      }
      timer_restart() {

      }
}

export class Lap {
    public startMs: number;
    public endMs: number;

    constructor(startMs: number) {
        this.startMs = startMs;
        this.endMs = 0;
    }

    stop(timeMs: number) {
        this.endMs = timeMs;
    }
}

function _now() {
    return (new Date()).getTime();
}
