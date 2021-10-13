import {Component, OnInit} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  number: number;
  file = '';
  messages: Array<any> = [];
  socket: any; 
  // SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect();//connection event 
  }

  ngOnInit() {
    this.messages = [];
    this.listen2Events();
    this.convert2Events();
  }

  listen2Events() {
    this.socket.on('msg', (data: any) => {
      this.messages.push(data);
    });
  }

  convert2Events() {
    this.socket.on('convert', data => {
      if (data.status === true) {
        this.file = data.id;
      } else {
        this.file = '';
      }
    });
  }

  sendMessage() {
    // const data = {
    //   'msg': this.messageText,
    //   'author': this.name
    // };
    // this.socket.emit('newMsg', data);
    // this.messageText = '';
    // this.name = '';
  }


}
