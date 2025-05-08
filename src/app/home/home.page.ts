import { Component, OnInit } from '@angular/core';
import { Message, ChatService } from "../services/chat.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  messages: Message[] = [];
  newMessage = '';
  userName = 'Angel';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(res => {
      this.messages = res;
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessages(this.newMessage, this.userName);
      this.newMessage = '';
    }
  }
}
