import { Component, OnInit } from '@angular/core';
import { YatchService } from '../yatch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private yatchService: YatchService) { }

  ngOnInit(): void {
    // console.log(this.yatchService.getYatchOfferta());
    
  }

}
