import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import firebase from 'firebase/compat';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {BoardService} from '../../services/board.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() title: string;
  @Input() editable = false;

  constructor(private boardService: BoardService) {
    this.boardService.edit=false;
  }

  ngOnInit() {

  }

  isInEdit(): boolean {
    return this.boardService.edit;
  }

  toggleEdit() {
    this.boardService.edit = !this.boardService.edit;
  }
}
