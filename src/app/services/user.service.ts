import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isSelectedRoute = 'home';
  selectedFoodType= 'all';
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
      bestsaler:false,

    },
    {
      id: 2,
      img: "download-removebg-preview.png",
      name: "Burger Chicken",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "12",
      categori: "burger",
      check:false,
      bestsaler:false,

    },
    {
      id: 3,
      img: "download-removebg-preview.png",
      name: "Burger Pork",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "25",
      categori: "burger",
      check:false,
      bestsaler:false,
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
      categori: "pizza",
      check:false,
      bestsaler:false,
    },
    {
      id: 8,
      img: "download-removebg-preview.png",
      name: "Pizza chesse",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "35",
      categori: "pizza",
      check:true,
      bestsaler:true,

    },
    {
      id: 9,
      img: "download-removebg-preview.png",
      name: "Salad with egg",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "10",
      categori: "salads",
      check:false,
      bestsaler:true,

    },
    {
      id: 10,
      img: "download-removebg-preview.png",
      name: "Salad vegetable",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "6",
      categori: "salads",
      check:false,
      bestsaler:true,
    },
    {
      id: 11,
      img: "download-removebg-preview.png",
      name: "Salad with fruit",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "20",
      categori: "salads",
      check:false,
      bestsaler:true,
    },
    {
      id: 12,
      img: "download-removebg-preview.png",
      name: "Souffle",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "20",
      categori: "dessert",
      check:false,
      bestsaler:false,
    },
    {
      id: 13,
      img: "download-removebg-preview.png",
      name: "Cupcake",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "30",
      categori: "dessert",
      check:false,
      bestsaler:false,
    },
    {
      id: 14,
      img: "download-removebg-preview.png",
      name: "Chocolate mousse",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "25",
      categori: "dessert",
      check:false,
      bestsaler:false,
    },
    {
      id: 15,
      img: "download-removebg-preview.png",
      name: "Cocacola",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "3",
      categori: "drink",
      check:false,
      bestsaler:true,
    },
    {
      id: 16,
      img: "download-removebg-preview.png",
      name: "Pepsi",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "3",
      categori: "dessert",
      check:false,
      bestsaler:false,
    },
    {
      id: 17,
      img: "download-removebg-preview.png",
      name: "7Up",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "3",
      categori: "drink",
      check:false,
      bestsaler:false,
    },
    {
      id: 18,
      img: "download-removebg-preview.png",
      name: "Water",
      des: "Lorem Ipsum is simply dummy text of the printing ",
      price: "25",
      categori: "drink",
      check:false,
      bestsaler:false,
    },
  ];

  articlesRight =[
    {
      id: 1,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 2,
      img: "articles-burger/download (2).jfif",
      name: "Burger Chicken",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 3,
      img: "articles-dessert/images (6).jfif",
      name: "Desert Chocolat",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 4,
      img: "articles-pizza/images (4).jfif",
      name: "Pizza ",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 5,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 6,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
  ];
  articlesLeft =[
    {
      id: 1,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 2,
      img: "articles-burger/download (2).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 3,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 4,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 5,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 6,
      img: "articles-burger/download (1).jfif",
      name: "Burger Beef",
      des: "Lorem Ipsum is simply dummy text of the printing ",
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
