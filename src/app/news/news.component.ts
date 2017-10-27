import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  public newsCards: [any] = [
    {
      img: 'news1.jpeg',
      title: 'Trump moves to scrap Obama rules on coal-fired power',
      postTime: 'October 10, 2017',
      source: 'Financial Times',
      content: 'The Trump administration will on Tuesday begin efforts to repeal an Obama-era climate change rule that would have accelerated the shift away from coal-fired power. Scott Pruitt, the head of the Environmental Protection Agency, said at an event in Kentucky that the “war on coal” was over and that he would be signing an order to scrap Barack Obama’s Clean Power Plan.  Mr Trump proposed repealing the plan during the presidential campaign as he pledged to revive the country’s struggling coal industry. The original rule was put on hold by the Supreme Court last year following legal challenges, but it was intended to cut carbon dioxide emissions to 32 per cent below 2005 levels by 2030.',
      relatedInvestments: [
        {
          asset: 'Gold',
          epectedEffect: 1
        }, {
          asset: 'Oil',
          epectedEffect: -2
        } , {
          asset: 'NSDAQ',
          epectedEffect: 3
        }
      ]
    }, {
      img: 'news1.jpeg',
      title: 'Trump moves to scrap Obama rules on coal-fired power',
      postTime: 'October 10, 2017',
      source: 'Financial Times',
      content: 'The Trump administration will on Tuesday begin efforts to repeal an Obama-era climate change rule that would have accelerated the shift away from coal-fired power. Scott Pruitt, the head of the Environmental Protection Agency, said at an event in Kentucky that the “war on coal” was over and that he would be signing an order to scrap Barack Obama’s Clean Power Plan.  Mr Trump proposed repealing the plan during the presidential campaign as he pledged to revive the country’s struggling coal industry. The original rule was put on hold by the Supreme Court last year following legal challenges, but it was intended to cut carbon dioxide emissions to 32 per cent below 2005 levels by 2030.',
      relatedInvestments: [
        {
          asset: 'Gold',
          epectedEffect: 1
        }
      ]
    }, {
      img: 'news1.jpeg',
      title: 'Trump moves to scrap Obama rules on coal-fired power',
      postTime: 'October 10, 2017',
      source: 'Financial Times',
      content: 'The Trump administration will on Tuesday begin efforts to repeal an Obama-era climate change rule that would have accelerated the shift away from coal-fired power. Scott Pruitt, the head of the Environmental Protection Agency, said at an event in Kentucky that the “war on coal” was over and that he would be signing an order to scrap Barack Obama’s Clean Power Plan.  Mr Trump proposed repealing the plan during the presidential campaign as he pledged to revive the country’s struggling coal industry. The original rule was put on hold by the Supreme Court last year following legal challenges, but it was intended to cut carbon dioxide emissions to 32 per cent below 2005 levels by 2030.',
      relatedInvestments: [
        {
          asset: 'Gold',
          epectedEffect: 1
        }
      ]
    }, {
      img: 'news1.jpeg',
      title: 'Trump moves to scrap Obama rules on coal-fired power',
      postTime: 'October 10, 2017',
      source: 'Financial Times',
      content: 'The Trump administration will on Tuesday begin efforts to repeal an Obama-era climate change rule that would have accelerated the shift away from coal-fired power. Scott Pruitt, the head of the Environmental Protection Agency, said at an event in Kentucky that the “war on coal” was over and that he would be signing an order to scrap Barack Obama’s Clean Power Plan.  Mr Trump proposed repealing the plan during the presidential campaign as he pledged to revive the country’s struggling coal industry. The original rule was put on hold by the Supreme Court last year following legal challenges, but it was intended to cut carbon dioxide emissions to 32 per cent below 2005 levels by 2030.',
      relatedInvestments: [
        {
          asset: 'Gold',
          epectedEffect: 1
        }
      ]
    }, {
      img: 'news1.jpeg',
      title: 'Trump moves to scrap Obama rules on coal-fired power',
      postTime: 'October 10, 2017',
      source: 'Financial Times',
      content: 'The Trump administration will on Tuesday begin efforts to repeal an Obama-era climate change rule that would have accelerated the shift away from coal-fired power. Scott Pruitt, the head of the Environmental Protection Agency, said at an event in Kentucky that the “war on coal” was over and that he would be signing an order to scrap Barack Obama’s Clean Power Plan.  Mr Trump proposed repealing the plan during the presidential campaign as he pledged to revive the country’s struggling coal industry. The original rule was put on hold by the Supreme Court last year following legal challenges, but it was intended to cut carbon dioxide emissions to 32 per cent below 2005 levels by 2030.',
      relatedInvestments: [
        {
          asset: 'Gold',
          epectedEffect: 1
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
