import { Component, OnInit, AfterViewChecked} from '@angular/core';

declare var moment: any;

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  public messages: [any] = [{
      messageText: 'Hi, I\'m the Finbot for customer care. What can I help you today?',
      postTime: moment().format('MMM D, HH:mm:ss'),
      avatar: 'avatar-finbot.png',
      fromName: 'Finbot',
      isFromFinbot: true
    }];
  
  private isToScroll = false;

  constructor() { }

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
    
  }

}
