import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  isChosse = false;
  selectedFoodType = 'all';
  listData =[...this.userService.listFoods] ||[];
  items= 0;

  constructor(private router:Router, public userService: UserService,private route: ActivatedRoute ){
    this.countNumber();
  }


  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.selectedFoodType = params['categori'];
        console.log(this.selectedFoodType); // { order: "popular" }
      })
  }

  get islogin() {
    return localStorage.getItem('isLoginIn');
  }

  search(){
    this.isSearch=true;
  }

  navigateUrl(direction: string, type: string) {
    this.router.navigate([direction], { queryParams: { categori: type }});
    this.selectedFoodType = type;

  }

  addNewItem(value: string) {
    this.direction.emit(value);
    console.log(value);
  }

  navigate(directionMenu: string){
    this.userService.navigate(directionMenu);
    this.router.navigate([directionMenu]);
    if(directionMenu==='menu'){
      this.selectedFoodType='all';

    }
    else{
      this.selectedFoodType='';
    }
  }

  logout(direction: string):void{
    this.userService.navigate(direction);
    this.router.navigate([direction]);
    this.router.navigate(['']) ;
    localStorage.clear();
  }

  countNumber(){
    this.listData.find(elm=> {
      if(elm.check=== true){
        length++;
        this.items= length;
        console.log(this.items);
      }
    });
  }
}
