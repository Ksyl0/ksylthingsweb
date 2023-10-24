import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy{
  timeSpent: number = 0;
  timeNeeded: number = this.getRndInteger(19,40)
  countdown: any;
  lastStream: Date = new Date("2023-07-11T17:00:00")

  ngOnInit(): void {
    this.timeSpent = 0;
    this.countdown = this.calcTimeSinceLastStream(this.lastStream)
    setInterval(()=>{
      this.timeSpent++;
      this.countdown = this.calcTimeSinceLastStream(this.lastStream)
    },1000)
  }

  ngOnDestroy(): void {
      clearInterval(this.countdown);
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  calcTimeSinceLastStream(lastStreamDate: Date){
    const now = new Date();
    let countdown: any;
    const difference = now.getTime() - lastStreamDate.getTime()

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const months = Math.floor(days / 30);
    days -= months * 30
    const weeks = Math.floor(days / 7);
    days -= weeks * 7;

    countdown = {
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
    
    return countdown;
  }

}
