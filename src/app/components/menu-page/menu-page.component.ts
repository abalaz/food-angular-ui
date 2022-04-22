import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  listData = [...this.userService.listFoods] || [];
  selectedFoodType = 'all';
  foodType= false;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.userService.navigate('menu');
    this.route.queryParams.subscribe(url => {
      this.selectedFoodType = url['categori'];
      console.log(this.selectedFoodType)
      this.findFood();
    });
  }

  ngOnInit(): void {

  }

  findFood() {
  this.listData.find(elm => {
    if(elm.categori === this.selectedFoodType)
    {
      this.foodType= true;
      console.log("true")
    }
  })
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
