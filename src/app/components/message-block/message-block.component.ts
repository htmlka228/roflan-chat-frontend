import {Component, Directive, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css']
})
export class MessageBlockComponent implements OnInit {
  @Input()
  username: string;
  @Input()
  sentTime: string;
  @Input()
  text: string;

  ngOnInit() {
  }
}
