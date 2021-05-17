import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { IHero } from '../hero';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  selectedHero?: IHero;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
