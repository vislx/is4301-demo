import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChatResponseService {
  
  private assetsPrice: any;
  portfolioPerofmance = `
  Your portfolio's performance is shown as below: <br/>
  <div>Month-to-date: <span class="text-danger">-0.27%</span>, starting 721.3k, Add/Wdw -30.2k, P/L 10.1k, ending 701.2k</div>
  <div>Year-to-date: <span class="text-success">2.51%</span>, starting 667.0k, Add/Wdw 4.0k, P/L 30.2k, ending 701.2k</div>
  Assets breaks down: <br/>
  `;
  
  portfolioAssets = `
  Your portfolio's assets status is shown as below: <br/>
  <div>Total Assets: 901.2k<br/>Loans: -200.0k<br/>Net Assets: 701.2k</div>
  `;
  
  portfolioTopGainer = `
  Your top portfolio gainer is <strong>Aphalbet Inc.</strong>, stock GOOG, <span class="text-success">+60.23(6.19%)</span>
  `;
  
  portfolioTopLoser = `
  Your top portfolio loser is <strong>BGF Global Allocation Fund</strong>, AUD Hedged, <span class="text-danger">-12.45 (-1.43%)</span>
  `;
  
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
    } else if (content.includes('goog') || content.includes('google') || content.includes('alphabet')) {
      result = this.getAssetString('GOOG');
    } else if (content.includes('my portfolio') || content.includes('performance')) {
      result = this.portfolioPerofmance;
    } else if (content.includes('portfolio asset') || content.includes('my asset')) {
      result = this.portfolioAssets;
    } else if (content.includes('gainer')) {
      result = this.portfolioTopGainer;
    } else if (content.includes('loser')) {
      result = this.portfolioTopLoser;
    } else {
    
    }

    return Promise.resolve(result);
  }
  
  private getAssetString(assetName: string): string {
    return 'Latest ' + assetName.split('_').join(' ')
      + ' is ' + this.assetsPrice[assetName].price
      + (this.assetsPrice[assetName].change ? (', changed by ' + this.assetsPrice[assetName].change + '(' + this.assetsPrice[assetName].pct + '%)') : '')
      + ', previous ' + this.assetsPrice[assetName].last
      + (this.assetsPrice[assetName].exp ? (', expected ' +  this.assetsPrice[assetName].exp + '.') : '.')
      ;
  }
  
  

}
