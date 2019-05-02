import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-mycalendar',
  templateUrl: './mycalendar.page.html',
  styleUrls: ['./mycalendar.page.scss'],
})
export class MycalendarPage implements OnInit {

  startTime: any;
  endTime:any;

  constructor(private calendar: Calendar) { }

  addEvent(){
    console.log(this.startTime, this.endTime)
    this.calendar.createEvent("Testing Ionic", 
                                "Bangalore", 
                                "some test", 
                                this.startTime, 
                                this.endTime);
  }

  ngOnInit() {
  }

}
