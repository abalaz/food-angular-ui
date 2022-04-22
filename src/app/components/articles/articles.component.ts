import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  listDataRight = [...this.userService.articlesRight] || [];
  listDataLeft =[...this.userService.articlesLeft] || [];

  constructor(private userService: UserService) {
    this.userService.navigate('articles')
   }

  ngOnInit(): void {
  }

}
