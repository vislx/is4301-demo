import { Component, OnInit} from '@angular/core';
import { ChatResponseService} from './chat-response.service';
// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatResponseService]
})
export class AppComponent  implements OnInit {
  title = 'app for IS4301';


  ngOnInit() {
    // $(document).ready(function() {
    //   $('.ellipsis').ellipsis();
    // });
  }
}
