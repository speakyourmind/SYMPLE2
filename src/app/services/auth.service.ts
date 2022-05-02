import {Injectable} from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import {UserService} from './user.service';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {Board} from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  db: AngularFireDatabase;
  defaultBoardData;

  constructor(db: AngularFireDatabase, private auth: Auth, private userService: UserService) {
    this.db = db;
  }

  async register({email, password}) {
    try {
      const userAuth = await createUserWithEmailAndPassword(this.auth, email, password);
      const cells = this.db.database.ref().child(userAuth.user.uid+ '_cells');
      await cells.child('yes-no').set({key: 'yes-no', backgroundColor: 'green', displayText: 'YES/NO', route:'/home/yes-no'});
      await cells.child('yes').set({key: 'yes', backgroundColor: 'green', displayText: 'YES'});
      await cells.child('no').set({key: 'no', backgroundColor: 'red', displayText: 'NO'});
      const  boards = this.db.database.ref().child(userAuth.user.uid+ '_boards');
      await boards.child('home').set({key: 'home', difficulty: 1, title: 'YES/NO', cellArray:'yes,no'});
      return userAuth;
    } catch (e) {
      return null;
    }
  }

  async login({email, password}) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      this.userService.setLoggedIn(true);

      return user;
    } catch (e) {
      this.userService.setLoggedIn(false);
      return null;
    }
  }

  async logout() {
    this.userService.setLoggedIn(false);
    return signOut(this.auth);
  }
}
