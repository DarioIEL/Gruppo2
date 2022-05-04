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
    this.yatchs = yatchService.getYatchOfferta();
  }
  
  ngOnInit(): void {
    console.log(this.yatchs);
    
  }

}
