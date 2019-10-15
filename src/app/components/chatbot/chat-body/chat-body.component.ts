import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { SenderChatBubbleComponent } from "./sender-chat-bubble/sender-chat-bubble.component";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-chat-body",
  templateUrl: "./chat-body.component.html",
  styleUrls: ["./chat-body.component.css"]
})
export class ChatBodyComponent implements OnInit {
  @ViewChild("chatContainer", { read: ViewContainerRef })
  vc: ViewContainerRef;

  constructor(
    private factory: ComponentFactoryResolver,
    private chat: ChatService
  ) {}

  ngOnInit() {
    this.chat.AddToBubble.subscribe((text: string) => {
      this.addComponent(text);
    });
  }

  addComponent(text) {
    const factory = this.factory.resolveComponentFactory(
      SenderChatBubbleComponent
    );
    const componentRef = this.vc.createComponent(factory);
    (<SenderChatBubbleComponent>componentRef.instance).chatText = text;
  }
}
