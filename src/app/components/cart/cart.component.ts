import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listData = [...this.userService.listFoods];
  items=0;

  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
  }

}
