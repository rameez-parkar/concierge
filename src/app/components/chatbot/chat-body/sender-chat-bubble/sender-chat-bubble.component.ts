import { Component, OnInit, Input } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-sender-chat-bubble",
  templateUrl: "./sender-chat-bubble.component.html",
  styleUrls: ["./sender-chat-bubble.component.css"]
})
export class SenderChatBubbleComponent implements OnInit {
  @Input() chatText: string;
  constructor() {}

  ngOnInit() {}
}
