import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SenderChatBubbleComponent } from "../chat-body/sender-chat-bubble/sender-chat-bubble.component";
import { ChatService } from "src/app/services/chat.service";
import { ChatBodyComponent } from "../chat-body/chat-body.component";

@Component({
  selector: "app-chat-input",
  templateUrl: "./chat-input.component.html",
  styleUrls: ["./chat-input.component.css"]
})
export class ChatInputComponent implements OnInit {
  constructor(private chat: ChatService) {}

  ngOnInit() {}

  userInput: string = "";

  UpdateBubble() {
    this.chat.textUpdate(this.userInput);
    this.userInput = "";
  }
}
