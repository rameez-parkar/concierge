import { Injectable } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";
import { DialogflowService } from "./dialogflow.service";

@Injectable({
  providedIn: "root"
})
export class ConversationService {
  constructor(
    private chatService: ChatService,
    private dialogflowService: DialogflowService
  ) {}

  ProcessInput(userInput: string) {
    // print on screen
    this.chatService.AddTextBubble(userInput, "user");
    // send to dialogflow
    let response = this.dialogflowService.GetResponse(userInput);
    // get intent and call necessary functions
    let intent = response.intent;
    let responseMessage = response.message;

    switch (intent) {
      case "Welcome":
        this.TalkToUser(responseMessage);
        break;
      default:
        this.Fallback();
        break;
    }
  }

  TalkToUser(response: string) {
    this.chatService.AddTextBubble(response, "bot");
  }

  Fallback() {
    this.chatService.AddTextBubble(
      "Sorry, I didn't catch you! Can you be more specific",
      "bot"
    );
  }
}
