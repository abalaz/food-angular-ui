import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }
  navigateUrl(){
    this.router.navigate(['']) ;
    localStorage.setItem('isLoginIn', 'false');
  }
}
