import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-db-activity',
  templateUrl: './db-activity.component.html',
  styleUrls: ['./db-activity.component.css']
})
export class DbActivityComponent implements OnInit {
  @Input() message = 'There is no message for this activity.';
  @Input() postTime: any = '5 min ago';
  @Input() isImportant = false;
  @Input() isLast = false;

  constructor() { }

  ngOnInit() {
  }

}
