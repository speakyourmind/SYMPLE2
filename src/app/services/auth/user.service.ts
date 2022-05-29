import {Injectable} from '@angular/core';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User ={
    id : 0,
    email:'',
    loggedIn: true
  };

  constructor() {
  }

  public setLoggedIn(value: boolean): void {
    this.user.loggedIn = value;
  }

  public isLoggedIn(): boolean {
    return this.user.loggedIn;
  }
}
