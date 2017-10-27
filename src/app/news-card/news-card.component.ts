import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  private _img: string;
  private _title: string;
  private _content: string;
  private _postTime: string;
  private _source: string;
  private _relatedInvestments: [any];

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set img(img: string){
    this._img = img;
  }
  get img(){ return this._img; }
  
  @Input()
  set title(title: string){
    this._title = title;
  }
  get title(){ return this._title; }
  
  @Input()
  set content(content: string){
    this._content = content;
  }
  get content(){ return this._content.substr(0, 220) + '...'; }
  
  @Input()
  set postTime(postTime: string){
    this._postTime = postTime;
  }
  get postTime(){ return this._postTime; }
  
  @Input()
  set source(source: string){
    this._source = source;
  }
  get source(){ return this._source; }

  @Input()
  set relatedInvestments(relatedInvestments: [any]){
    this._relatedInvestments = relatedInvestments;
  }
  get relatedInvestments(){ return this._relatedInvestments; }

}
