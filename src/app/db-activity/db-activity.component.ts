import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-db-activity',
  templateUrl: './db-activity.component.html',
  styleUrls: ['./db-activity.component.css']
})
export class DbActivityComponent implements OnInit {
  @Input() message: string;
  @Input() postTime: any;
  @Input() hasStar: boolean;

  constructor() { }

  ngOnInit() {
  }

}
