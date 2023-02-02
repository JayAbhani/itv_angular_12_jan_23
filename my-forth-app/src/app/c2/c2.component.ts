import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {
  @Input()
  childData = "";

  @Output()
  sendData = new EventEmitter();

  sendDataToParent(){
    this.sendData.emit("this is data from child component");
  }
}
