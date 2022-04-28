import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cell} from '../../models/cell.model';
import {BoardService} from '../../services/board.service';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import {Board} from '../../models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() name: string;

  cellsByBoard: Cell[] = [];
  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase, private boardService: BoardService) {
    this.db = db;
  }

  ngOnInit() {
    this.cellsByBoard = this.boardService.getCellsByBoard(this.name);
  }

}

