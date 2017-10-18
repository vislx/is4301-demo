import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-market-trends',
  templateUrl: './db-market-trends.component.html',
  styleUrls: ['./db-market-trends.component.css']
})
export class DbMarketTrendsComponent implements OnInit {
  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false,
        ticks: {
          suggestedMin: 0
        }
      }]
    }
  };
  // public chartColors: [any] = [
  //   { // grey
  //     backgroundColor: 'rgba(156, 219, 243, 0.2)',
  //     borderColor: 'rgba(156, 219, 243, 1)',
  //     pointBackgroundColor: 'rgba(156, 219, 243, 1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(156, 219, 243, 0.8)'
  //   }];
  public chartLegend = true;
  public chartLabels: string[] = ['23 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan', '30 Jan'];
  public chartData: any[] = [
    {
      data: [65.00, 59.00, 55.00, 25.00, 51.00, 54.00],
      label: 'Equity'
    }, {
      data: [55.00, 34.00, 81.00, 55.00, 29.00, 65.00],
      label: 'Debt'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
