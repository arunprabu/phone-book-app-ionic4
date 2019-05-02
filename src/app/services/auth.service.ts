import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  constructor() { }

  isAuthenticated(){
    return this.isLoggedIn;
  }
}
