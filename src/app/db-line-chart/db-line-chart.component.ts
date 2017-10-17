import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-line-chart',
  templateUrl: './db-line-chart.component.html',
  styleUrls: ['./db-line-chart.component.css']
})
export class DbLineChartComponent implements OnInit {
  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public chartLabels: string[] = ['20 Jan', '21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan'];
  public chartLegend = false;

  public chartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
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
