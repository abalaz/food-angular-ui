import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isSelectedRoute = 'home';

  constructor() {
   }

  navigate(direction: string) {
    this.isSelectedRoute = direction;
  }

}
