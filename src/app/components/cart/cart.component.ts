import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listData = [...this.userService.listFoods];

  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
  }

  delete(i: number): void{
    this.listData = this.userService.listFoods.filter(elm => elm.id !== i);
    this.userService.listFoods = this.listData;
  }
}
