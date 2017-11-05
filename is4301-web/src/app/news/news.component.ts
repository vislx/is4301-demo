import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  public newsCards: any;
  
  public currentTime: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.currentTime = new Date();
    this.http.get('./assets/news/news.json').subscribe(data => {
      this.newsCards = data;
    });
  }

}
