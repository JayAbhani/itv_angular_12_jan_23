import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
  parentData = 'this is data from parent component';

  receivedData = "";
  receiveDataFromChild(data: string){
    this.receivedData = data;
  }
}
