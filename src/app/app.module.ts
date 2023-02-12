import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageBlockComponent } from './components/message-block/message-block.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserBarComponent } from './components/user-bar/user-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageBlockComponent,
    UserBarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
