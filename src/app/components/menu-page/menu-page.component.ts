import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  listData = [...this.userService.listFoods] || [];
  constructor(private userService: UserService) {
    this.userService.navigate('menu');
  }

  ngOnInit(): void {
  }

  unLike(i: any): void {
    this.listData.forEach(elm =>{
      if(elm.id === i.id){
        elm.check= true;
      }
    })
  }

  like(i: any): void {
    this.listData.forEach(elm =>{
      if(elm.id === i.id){
        elm.check= false;
      }
    })
  }

}
