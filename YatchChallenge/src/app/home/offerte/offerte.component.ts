import { Component, OnInit } from '@angular/core';
import { Yatch } from 'src/app/model.yatch';
import { YatchService } from 'src/app/yatch.service';


@Component({
  selector: 'app-offerte',
  templateUrl: './offerte.component.html',
  styleUrls: ['./offerte.component.css']
})
export class OfferteComponent implements OnInit {

  yatchs: Yatch[] = [];
  yatchService: YatchService;

  constructor(yatchService: YatchService) {
    this.yatchService = yatchService;
  }
  
  ngOnInit(): void {
    this.yatchService.getYatchOfferta().subscribe((yatch)=>{
      this.yatchs = yatch;
    });
    console.log(this.yatchs);
    
  }

}
