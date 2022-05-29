import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import firebase from 'firebase/compat';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/auth/user.service';
import {BoardService} from '../../services/communication/board.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() title: string;
  @Input() editable = false;
  @Input() cancelable = false;
  public name: string;

  constructor(private boardService: BoardService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.boardService.edit=false;
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('boardid');
  }

  isInEdit(): boolean {
    return this.boardService.edit;
  }

  toggleEdit() {
    this.boardService.edit = !this.boardService.edit;
  }

  async add() {
    await this.router.navigateByUrl('home/' + this.name + '/add', {replaceUrl: true});
  }
}
