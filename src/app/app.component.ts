import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {BoardService} from './services/board.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Home', url: '/home/home', icon: 'home'},
    {title: 'About', url: '/about', icon: 'information-circle'},
    {title: 'Logout', url: '/login', icon: 'exit', clickEvent: () => this.logout()},
  ];

  constructor(db: AngularFireDatabase, private boardService: BoardService, private userService: UserService, private authService: AuthService, private router: Router) {
    const listRef = db.list('cells');
    console.log(listRef);
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  async logout() {
    await this.authService.logout();
    await this.router.navigateByUrl('/login');
    console.log('Logged out');
  }

}
