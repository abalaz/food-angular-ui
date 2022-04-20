import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Output,EventEmitter } from '@angular/core';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() direction = new EventEmitter<string>();
  title = 'eatleand';
  isSearch=false;
  isSelectedRoute = this.userService.isSelectedRoute;


  constructor(private router:Router, public userService: UserService){
  }

  ngOnInit(): void {
  }

  get islogin() {
    return localStorage.getItem('isLoginIn');
  }

  search(){
    this.isSearch=true;
  }

  navigateUrl(direction: string) {
    this.userService.navigate(direction);
    this.router.navigate([direction]);
  }

  addNewItem(value: string) {
    this.direction.emit(value);
    console.log(value);
  }

  navigate(directionMenu: string){
    this.userService.navigate(directionMenu);
    this.router.navigate([directionMenu]);
  }
  logout(direction: string):void{
    this.userService.navigate(direction);
    this.router.navigate([direction]);
    this.router.navigate(['']) ;
    localStorage.clear();
  }
}
