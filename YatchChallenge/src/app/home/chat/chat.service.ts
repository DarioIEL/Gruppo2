import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from './model.chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url: string = "https://yatch-login-default-rtdb.europe-west1.firebasedatabase.app/chat.json";

  constructor(private http:HttpClient) {}

  public postMessage(chat: Chat){
    return this.http.post(this.url, chat);
  }

}
