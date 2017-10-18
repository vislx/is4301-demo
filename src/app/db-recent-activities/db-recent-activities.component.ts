import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-recent-activities',
  templateUrl: './db-recent-activities.component.html',
  styleUrls: ['./db-recent-activities.component.css']
})
export class DbRecentActivitiesComponent implements OnInit {
  public activities: [any] = [
    {
      message: 'Your deposit has been updated to: Paid $1,950',
      postTime: '10 min ago',
      isImportant: false
    }, {
      message: 'Your deposit has been updated to: Paid $1,950',
      postTime: '15 min ago',
      isImportant: true
    }, {
      message: 'Your deposit has been updated to: Paid $1,950',
      postTime: '1 hr ago',
      isImportant: false
    }, {
      message: 'Your deposit has been updated to: Paid $1,950',
      postTime: '2 hr ago',
      isImportant: false
    }];

  constructor() { }

  ngOnInit() {
  }

}
