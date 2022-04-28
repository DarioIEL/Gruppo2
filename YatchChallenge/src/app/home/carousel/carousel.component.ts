import { Component, OnInit } from '@angular/core';
import { Yatch } from 'src/app/model.yatch';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    yatchList: Yatch;
  }

}
