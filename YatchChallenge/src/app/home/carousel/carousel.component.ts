import { Component, OnInit } from '@angular/core';
import { Yatch } from 'src/app/model.yatch';
import { YatchService } from 'src/app/yatch.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private yatchService: YatchService) { }
  yatchList: Yatch[];

  ngOnInit(): void {
    // this.yatchList = this.yatchService.getYatch();
  }

}
