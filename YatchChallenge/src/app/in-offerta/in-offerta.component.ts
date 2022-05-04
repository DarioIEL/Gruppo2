import { Component, OnInit } from '@angular/core';
import { Yatch } from '../model.yatch';
import { YatchService } from '../yatch.service';

@Component({
  selector: 'app-in-offerta',
  templateUrl: './in-offerta.component.html',
  styleUrls: ['./in-offerta.component.css']
})
export class InOffertaComponent implements OnInit {

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
