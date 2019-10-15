import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DialogflowService {
  constructor() {}

  GetResponse(request: String) {
    let response = {
      intent: request,
      message: "Hello User"
    };
    return response;
  }
}
