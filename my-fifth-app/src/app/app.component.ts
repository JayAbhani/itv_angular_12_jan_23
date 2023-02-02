import { Component } from '@angular/core';
import { ReturnMsgService } from './return-msg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private returnMsgService: ReturnMsgService) {}
  retFromApp = this.returnMsgService.retMsg("hello");
}
