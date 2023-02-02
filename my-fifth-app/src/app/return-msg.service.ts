import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReturnMsgService {

  constructor() { }
  retMsg(message: string){
    return message;
  }
}
