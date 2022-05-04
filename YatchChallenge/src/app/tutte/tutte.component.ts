import { Component, OnInit } from '@angular/core';
import { Yatch } from '../model.yatch';
import { YatchService } from '../yatch.service';

@Component({
  selector: 'app-tutte',
  templateUrl: './tutte.component.html',
  styleUrls: ['./tutte.component.css']
})
export class TutteComponent implements OnInit {

  yatchs: Yatch[] = [];
  yatchService: YatchService;

  constructor(yatchService: YatchService) {
    this.yatchService = yatchService;
  }
  
  ngOnInit(): void {
    this.yatchService.getAll().subscribe((yatchs)=>{
      this.yatchs = yatchs;
    });
    console.log(this.yatchs);
    
  }

}
