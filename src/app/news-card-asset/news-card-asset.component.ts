import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-news-card-asset',
  templateUrl: './news-card-asset.component.html',
  styleUrls: ['./news-card-asset.component.css']
})
export class NewsCardAssetComponent implements OnInit {
  @Input() assetName: string;
  @Input() influence: number;

  constructor() { }

  ngOnInit() {
  }

}
