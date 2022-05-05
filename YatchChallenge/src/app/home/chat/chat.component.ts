import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Chat } from './model.chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  chat: Chat;
  ngOnInit(): void {
    
    

    // const button = document.getElementById('invia');
    // button.addEventListener('click',()=>{
    //   const chatMessage = document.querySelector('.chatMessage');
    //   let inputMessage = document.querySelector('inputMessage');
    //   let div = document.createElement('div');
    //   let p = document.createElement('p');
    //   p.innerHTML = inputMessage.textContent;
    //   console.log(inputMessage.textContent);
      
    //   div.appendChild(p);
    //   chatMessage.appendChild(div);

    // });
    
    console.log(this.chat.testo);

  }

}
