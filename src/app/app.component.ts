import {Component, OnInit} from '@angular/core';

export class Message {
  text: string;
  sentTime: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Roflan Chat!';

  ngOnInit() {
  }
}
