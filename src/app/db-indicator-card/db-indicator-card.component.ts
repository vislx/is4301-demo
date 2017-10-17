import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-db-indicator-card',
  templateUrl: './db-indicator-card.component.html',
  styleUrls: ['./db-indicator-card.component.css']
})
export class DbIndicatorCardComponent implements OnInit {
  @Input() value: string;
  @Input() name: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
