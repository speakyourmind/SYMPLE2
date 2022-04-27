import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Home', url: '/home/home', icon: 'home'},
    {title: 'About', url: '/about', icon: 'information-circle'},
  ];

  constructor(db: AngularFireDatabase) {
    const listRef = db.list('cells');
    console.log(listRef);
  }
}
