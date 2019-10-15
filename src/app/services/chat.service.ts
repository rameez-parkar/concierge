import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  @Output() AddToBubble: EventEmitter<any> = new EventEmitter();

  textUpdate(userText) {
    this.AddToBubble.emit(userText);
  }

  updateScroll() {
    var element = document.getElementById("msg-page");
    element.scrollTop = element.scrollHeight;
  }
  constructor() {}
}
