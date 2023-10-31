import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdowns',
  templateUrl: './countdowns.component.html',
  styleUrls: ['./countdowns.component.css'],
})
export class CountdownsComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() targetDate: Date = new Date('2024-01-09T00:00:00');
  countdown: any;

  ngOnInit(): void {
      this.calculateTimeUntil();
      this.countdown = setInterval(() => {
        this.calculateTimeUntil();
      },1000);
  }
  ngOnDestroy(): void {
      clearInterval(this.countdown);
  }

  ngAfterViewInit(): void {
      this.calculateTimeUntil();
  }

  calculateTimeUntil(){
    const now = new Date();
    const difference = this.targetDate.getTime() - now.getTime();

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const months = Math.floor(days / 30);
    days -= months * 30
    const weeks = Math.floor(days / 7);
    days -= weeks * 7

    if(difference < 0){
      clearInterval(this.countdown);
    }

    this.countdown = {
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      difference: difference
    }
  }
}
