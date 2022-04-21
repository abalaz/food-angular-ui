import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  listData = [...this.userService.listFoods] || [];
  constructor(
    private router:Router, public userService: UserService) {
    }


  ngOnInit(): void {
    this.listData = this.listData.splice(0, 6);
    console.log(this.listData);
  }

  navigate(directionMenu: string) {
    this.userService.navigate(directionMenu);
    this.router.navigate([directionMenu]);
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
