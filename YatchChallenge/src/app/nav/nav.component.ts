import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})



export class NavComponent implements OnInit {

  constructor(public authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
    
  }
  
resetPage(){
  this.router.navigate(['/'])
  .then(() => {
    window.location.reload();
  });
}

}
