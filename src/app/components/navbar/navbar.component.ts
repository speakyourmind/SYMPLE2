import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import firebase from 'firebase/compat';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() title: string;

  constructor(private authService: AuthService, private userService: UserService, private router: Router,) {
  }

  ngOnInit() {

  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }


  async logout() {
    await this.authService.logout();
    console.log('Logged out');
    await this.router.navigateByUrl('/login', { replaceUrl: true });

  }
}
