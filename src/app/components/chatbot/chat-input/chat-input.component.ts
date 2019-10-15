import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SenderChatBubbleComponent } from "../chat-body/sender-chat-bubble/sender-chat-bubble.component";
import { ChatService } from "src/app/services/chat.service";
import { ChatBodyComponent } from "../chat-body/chat-body.component";

@Component({
  selector: "app-chat-input",
  templateUrl: "./chat-input.component.html",
  styleUrls: ["./chat-input.component.css"]
})
export class ChatInputComponent {
  constructor(private chat: ChatService) {}

  userInput: string = "";

  CreateBubble() {
    if (this.userInput.length !== 0) {
      this.chat.textUpdate(this.userInput);
    }
    this.userInput = "";
  }
}
