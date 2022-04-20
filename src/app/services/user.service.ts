import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isSelectedRoute = 'home';
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
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
