import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  constructor(
    private router:Router, public userService: UserService) {
    }


  ngOnInit(): void {
  }

  navigate(directionMenu: string) {
    this.userService.navigate(directionMenu);
    this.router.navigate([directionMenu]);
  }
}
