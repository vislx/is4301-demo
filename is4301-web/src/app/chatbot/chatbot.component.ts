import { Component, OnInit, AfterViewChecked} from '@angular/core';
import { ChatResponseService } from '../chat-response.service';

declare var moment: any;

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  public messages: [any] = [{
      messageText: `
      Hi, I\'m the Finbot for customer care. What can I help you today?<br/>
      <div class="small" style="line-height: 50%">
        You may ask quote for market data, like:
        <strong>stock price</strong> (e.g. "What's Google's stock price today?"),
        <strong>foreign exchange</strong> (e.g. "What's USD to SGD today?"),
        <strong>exchange index</strong> (e.g. "What's the SP500 index today?"),
        or <strong>indicators</strong> (e.g. "How is US inflation rate changed?").
      </div>
      <div class="small mt-1" style="line-height: 50%">
        You can ask about your portfolio, like:
        <strong>portfolio performance</strong> (e.g. "How is my portfolio performance?"),
        <strong>portfolio assets</strong> (e.g. "How is my portfolio assets?"),
        <strong>portfolio top-gainer</strong> (e.g. "What's my portfolio top-gainer?"),
        <strong>portfolio top-loser</strong> (e.g. "What's my portfolio top-loser?"),
      </div>
      `,
      postTime: moment().format('MMM D, HH:mm:ss'),
      avatar: 'avatar-finbot.png',
      fromName: 'Finbot',
      isFromFinbot: true
    }];
  
  private isToScroll = false;

  constructor(private crs: ChatResponseService) { }

  ngOnInit() {
    document.body.scrollTop = document.body.scrollHeight;
  }
  
  ngAfterViewChecked() {
    if (this.isToScroll) {
      this.isToScroll = false;
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
  
  onMessageSent (message: string) {
    console.log( 'Message in chat: ' + message);
    this.isToScroll = (message != null);
    this.messages.push({
      messageText: message,
      postTime: moment().format('MMM D, HH:mm:ss'),
      avatar: 'avatar.png',
      fromName: 'Brian Harris'
    });
    
    
    this.crs.getResponse(message).then(reply => {
      this.isToScroll = (message != null);
      this.messages.push({
        messageText: reply,
        postTime: moment().format('MMM D, HH:mm:ss'),
        avatar: 'avatar-finbot.png',
        fromName: 'Finbot',
        isFromFinbot: true
      });
    });
    
    
  }

}
