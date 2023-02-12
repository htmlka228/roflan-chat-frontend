import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {webSocket} from 'rxjs/webSocket';
import {Message} from '../../app.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  private subject = webSocket('ws://localhost:8080/chat');
  messageTextControl = new FormControl('');
  @ViewChild('chatArea') private chatArea: ElementRef;

  messages: Message[] = [];

  ngOnInit() {
    this.subject.subscribe(message => this.messages.push(message as Message));
  }

  ngAfterViewChecked() {
    this.scrollChatToBottom();
  }

  pushMessage(): void {
    const message: Message = new Message();
    message.text = this.messageTextControl.value;

    if (message.text) {
      this.subject.next(message);
    }
    this.messageTextControl.setValue('');
    this.scrollChatToBottom();
  }

  scrollChatToBottom(): void {
      this.chatArea.nativeElement.scrollTop = this.chatArea.nativeElement.scrollHeight;
  }
}
