import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { DbIndicatorCardComponent } from './db-indicator-card/db-indicator-card.component';
import { DbLineChartComponent } from './db-line-chart/db-line-chart.component';

import { ChartsModule } from 'ng2-charts';
import { DbMarketTrendsComponent } from './db-market-trends/db-market-trends.component';
import { DbRecentActivitiesComponent } from './db-recent-activities/db-recent-activities.component';
import { DbActivityComponent } from './db-activity/db-activity.component';
import { NewsTopLeftComponent } from './news-top-left/news-top-left.component';
import { NewsTopRightComponent } from './news-top-right/news-top-right.component';
import { NewsBottomLeftComponent } from './news-bottom-left/news-bottom-left.component';
import { NewsBottomRightComponent } from './news-bottom-right/news-bottom-right.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'news', component: NewsComponent },
  { path: 'chat', component: ChatbotComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToolbarComponent,
    DashboardComponent,
    NewsComponent,
    ChatbotComponent,
    DbIndicatorCardComponent,
    DbLineChartComponent,
    DbMarketTrendsComponent,
    DbRecentActivitiesComponent,
    DbActivityComponent,
    NewsTopLeftComponent,
    NewsTopRightComponent,
    NewsBottomLeftComponent,
    NewsBottomRightComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }), // enableTracing <-- debugging purposes only
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
