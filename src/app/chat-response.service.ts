import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChatResponseService {
  
  private assetsPrice: any;

  constructor(private http: HttpClient) {
    this.http.get('./assets/assets_price.json').subscribe(data => {
      this.assetsPrice = data;
    });
  }
  
  public getResponse(content: string): Promise<string> {
    content = content.toLowerCase();
    let result = 'Sorry, I can\'t understand your question :(';
    
    if (content === 'hello' || content === 'hi') {
      result = 'Hi Harris, nice to meet you!';
    } else if (content.includes('usd')) {
      result = this.getAssetString('USD_to_SGD');
    } else if (content.includes('cny')) {
      result = this.getAssetString('CNY_to_SGD');
    } else if (content.includes('sp500')) {
      result = this.getAssetString('SP500_Index');
    } else if (content.includes('us inflation')) {
      result = this.getAssetString('US_inflation');
    } else {
    
    }

    return Promise.resolve(result);
  }
  
  private getAssetString(assetName: string): string {
    return 'Today\'s ' + assetName.split('_').join(' ')
      + ' is ' + this.assetsPrice[assetName].price
      + (this.assetsPrice[assetName].change ? (', changed by ' + this.assetsPrice[assetName].change + '(' + this.assetsPrice[assetName].pct + '%)') : '')
      + ', previous ' + this.assetsPrice[assetName].last
      + (this.assetsPrice[assetName].exp ? (', expected ' +  this.assetsPrice[assetName].exp + '.') : '.')
      ;
  }

}
