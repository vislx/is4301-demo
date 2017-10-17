import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards = [
    {
      name: 'Total Invest',
      value: '$32,300',
      icon: 'fa fa-line-chart indicator-icon'
    }, {
      name: 'Total Expense',
      value: '16,500',
      icon: 'fa fa-level-up indicator-icon'
    }, {
      name: 'Total Revenue',
      value: '$22,700',
      icon: 'fa fa-level-down indicator-icon'
    }, {
      name: 'Total Balance',
      value: '$66,400',
      icon: 'fa fa-pie-chart indicator-icon'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
