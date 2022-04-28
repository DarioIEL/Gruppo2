import { Component, OnInit } from '@angular/core';
import { Yatch } from 'src/app/model.yatch';


@Component({
  selector: 'app-offerte',
  templateUrl: './offerte.component.html',
  styleUrls: ['./offerte.component.css']
})
export class OfferteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    yatchList: Yatch;
  }

}
