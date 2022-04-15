import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  isSearch=false;
  isHome=false;
  isMenu=false;

  constructor(private userService: UserService) {
    this.userService.navigate('menu');
  }

  ngOnInit(): void {
  }

  search(){
    this.isSearch=true;
  }
}
