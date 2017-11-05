import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { ChatInputboxComponent } from './chat-inputbox/chat-inputbox.component';
import { NewsCardAssetComponent } from './news-card-asset/news-card-asset.component';

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
    ChatMessageComponent,
    NewsCardComponent,
    ChatInputboxComponent,
    NewsCardAssetComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }), // enableTracing <-- debugging purposes only
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
