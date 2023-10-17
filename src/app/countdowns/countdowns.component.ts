import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdowns',
  templateUrl: './countdowns.component.html',
  styleUrls: ['./countdowns.component.css'],
})
export class CountdownsComponent implements OnInit, OnDestroy {
  @Input() targetDate: Date = new Date('2024-01-09T00:00:00');
  countdown: any;
  countdown2: any;

  ngOnInit(): void {
      this.calculateTimeUntil();
      this.countdown = setInterval(() => {
        this.calculateTimeUntil();
      },1000);
      this.calculateUntilAdriaxisBack();
      this.countdown2 = setInterval(() =>{
        this.calculateUntilAdriaxisBack();
      })
  }
  ngOnDestroy(): void {
      clearInterval(this.countdown);
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

    this.countdown = {
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  }

  calculateUntilAdriaxisBack(){
    const teraz = new Date();
    const powrotAdr = new Date('2023-10-17T17:40');
    const difference2 = powrotAdr.getTime() - teraz.getTime();

    let days2 = Math.floor(difference2 / (1000 * 60 * 60 * 24));
    const hours2 = Math.floor((difference2% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes2 = Math.floor((difference2 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds2 = Math.floor((difference2 % (1000 * 60)) / 1000);  

    this.countdown2 = {
      days: days2,
      hours: hours2,
      minutes: minutes2,
      seconds: seconds2,
      difference: difference2
    }
  }
}
