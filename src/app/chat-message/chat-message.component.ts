import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() messageText: string;
  @Input() fromName: string;
  @Input() avatar: string;
  @Input() postTime: any;

  constructor() { }

  ngOnInit() {
  }

}
