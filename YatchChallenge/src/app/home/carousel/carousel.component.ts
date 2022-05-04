import { Component, OnInit } from '@angular/core';
import { Yatch } from 'src/app/model.yatch';
import { YatchService } from 'src/app/yatch.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  yatchList: Yatch[] = [];
  constructor(private yatchService: YatchService) { }

  ngOnInit(): void {
    this.yatchService.getAll();
  }

}
