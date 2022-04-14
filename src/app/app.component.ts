import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router:Router){
    console.log('check',this.router.url);
  }

  title = 'eatleand';
  isSearch=false;
  isSelectedRoute = 'home';

  ngOnInit(): void {
  }

  get islogin() {
    return localStorage.getItem('isLoginIn');
  }

  search(){
    this.isSearch=true;
  }

  navigate(direction: string) {
    this.isSelectedRoute = direction;
    this.router.navigate([direction]);
  }

}
