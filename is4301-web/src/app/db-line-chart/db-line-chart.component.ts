import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-line-chart',
  templateUrl: './db-line-chart.component.html',
  styleUrls: ['./db-line-chart.component.css']
})
export class DbLineChartComponent implements OnInit {
  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    elements: {
      line: {
        tension: 0 // disables bezier curves
      }
    },
    scales: {
      yAxes: [{
        ticks: {
            callback: function(value, index, values) {
              return '$' + value;
              },
            suggestedMin: 0
        }
      }]
    }
  };
  public chartColors: [any] = [
    { // grey
      backgroundColor: 'rgba(156, 219, 243, 0.2)',
      borderColor: 'rgba(156, 219, 243, 1)',
      pointBackgroundColor: 'rgba(156, 219, 243, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(156, 219, 243, 0.8)'
    }];
  public chartLegend = false;
  public chartLabels: string[] = ['20 Jan', '21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan', '30 Jan'];
  public chartData: any[] = [
    {
      data: [65.00, 59.00, 80.00, 81.00, 56.00, 55.00, 40.00, 33.00, 25.00, 51.00, 54.00],
      label: 'Price'
    }
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }



}
