import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-inputbox',
  templateUrl: './chat-inputbox.component.html',
  styleUrls: ['./chat-inputbox.component.css']
})
export class ChatInputboxComponent implements OnInit {
  public message: string;
  @Output() onMessageSent = new EventEmitter<string>();
  public messageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      'messageBody': ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  
  sendChat() {
    this.message = this.messageForm.get('messageBody').value;
    this.messageForm.reset();
    // console.log('Message: ' + this.message);
    this.onMessageSent.emit(this.message);
  }
  

}
