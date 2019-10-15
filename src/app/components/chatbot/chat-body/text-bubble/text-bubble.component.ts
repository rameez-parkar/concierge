import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-text-bubble",
  templateUrl: "./text-bubble.component.html",
  styleUrls: ["./text-bubble.component.css"]
})
export class TextBubbleComponent implements OnInit {
  @Input() text: string;
  @Input() textType: string;

  constructor() {}

  ngOnInit() {}
}
