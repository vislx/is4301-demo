import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() img: string;
  @Input() title: string;
  @Input() content: string;
  @Input() postTime: string;
  @Input() source: string;
  @Input() relatedInvestments: [any];

  constructor() { }

  ngOnInit() {
  }


}
