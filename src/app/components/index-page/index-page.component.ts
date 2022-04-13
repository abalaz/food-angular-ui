import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  isSearch=false;
  isHome=false;
  isIndex=true;
  search(){
    this.isSearch=true;
  }

  menu(){
    this.isHome=true;
    this.isIndex=false;
    this.router.navigate(['menu']);
  }
}
