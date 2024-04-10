import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit {
  @Input() title: string = '';
  @Output() finish = new EventEmitter();
  @Input() expireDate: any = moment('2024/04/03');
  currentDate: any = moment();
  duration: any;
  timer: any;
  date: any;

  ngOnInit(): void {
    this.start();
    // this.remainningTime = this.expireDate - this.remainningTime
  }
  start() {
    this.timer = setInterval(() => {
      this.currentDate = moment();
      this.duration = moment.duration(this.expireDate.diff(this.currentDate));
      this.date = this.duration._data;
      if (this.isFinished()) {
        this.date.days = 0;
        this.date.hours = 0;
        this.date.minutes = 0;
        this.date.seconds = 0;
        this.finish.emit();
        clearInterval(this.timer);
      }
    }, 1000);
  }
  isFinished() {
    if (
      this.date.days > 0 ||
      this.date.hours > 0 ||
      this.date.minutes > 0 ||
      this.date.seconds > 0
    ) {
      return false;
    }
    return true;
  }
}
