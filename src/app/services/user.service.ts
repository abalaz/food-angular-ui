import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isSelectedRoute = 'home';
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  listFoods = [
    {
      id: 1,
      img: "download-removebg-preview.png",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "5",
      categori: "burger",
      check:true,
      bestsaler:true,

    },
    {
      id: 2,
      img: "download-removebg-preview.png",
      name: "Burger Chicken",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "12",
      categori: "burger",
      check:false,
      bestsaler:true,

    },
    {
      id: 3,
      img: "download-removebg-preview.png",
      name: "Burger Pork",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "25",
      categori: "burger",
      check:false,
      bestsaler:true,
    },
    {
      id: 4,
      img: "download-removebg-preview.png",
      name: "Burger Seafood",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "20",
      categori: "burger",
      check:false,
      bestsaler:true,
    },
    {
      id: 5,
      img: "download-removebg-preview.png",
      name: "Pizza",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "10",
      categori: "pizza",
      check:false,
      bestsaler:false,
    },
    {
      id: 6,
      img: "download-removebg-preview.png",
      name: "Pizza pork",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "35",
      categori: "pizza",
      check:false,
      bestsaler:false,
    },
    {
      id: 7,
      img: "download-removebg-preview.png",
      name: "Pizza Chicken",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "40",
      categori: "burger",
      check:false,
      bestsaler:false,
    },
  ];

  constructor() {
   }

   setLoggedIn(value :boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn','true');
  }

  isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  navigate(direction: string) {
    this.isSelectedRoute = direction;
  }

}
