import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  public messages: [any] = [
    {
      messageText: 'Hi, I\'m the Finbot for customer care. What can I help you today?',
      postTime: '',
      avatar: 'avatar-finbot.png',
      fromName: 'Finbot',
      isFromFinbot: true
    }, {
      messageText: 'Where is the nearest investment branch?',
      postTime: 'Apr 3, 05:40',
      avatar: 'avatar.png',
      fromName: 'Brian Harris'
    }, {
      messageText: 'There is one branch near to you: \n United Square Branch',
      postTime: 'Apr 3, 05:41',
      avatar: 'avatar-finbot.png',
      fromName: 'Finbot',
      isFromFinbot: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
