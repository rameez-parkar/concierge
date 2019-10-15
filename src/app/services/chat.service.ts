import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  @Output() AddToBubble: EventEmitter<any> = new EventEmitter();

  userText: String;

  textUpdate(userText) {
    //console.log(userText);

    this.userText = userText;
    this.AddToBubble.emit(this.userText);
  }
  constructor() {}
}
