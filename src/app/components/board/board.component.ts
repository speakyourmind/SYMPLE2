import {Component, Input, OnInit} from '@angular/core';
import {Cell} from '../../models/cell.model';
import {BoardService} from '../../services/board.service';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {getAuth, onAuthStateChanged} from '@angular/fire/auth';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() name: string;

  cellsByBoard: Observable<Cell>[] = [];
  db: AngularFireDatabase;
  auth = getAuth();
  uid: string;

  constructor(db: AngularFireDatabase, private boardService: BoardService) {
    this.db = db;
  }

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      this.uid = (user) ? user.uid : null;
      this.cellsByBoard = this.boardService.getCellsByBoard(this.name, this.uid);
    });
  }

}

