import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  isSearch=false;
  isHome=false;
  isMenu=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search(){
    this.isSearch=true;
  }

  menu(){
    this.isMenu=true;
    this.router.navigate(['menu']);
  }

  home(){
    this.isHome=true;
    this.router.navigate(['home'])
  }
}
