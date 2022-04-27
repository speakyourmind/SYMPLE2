import {Component, Input, OnInit} from '@angular/core';
import {Cell} from '../../models/cell.model';
import {BoardService} from '../../services/board.service';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() name: string;

  cellsByBoard: Cell[][] = [];
  cells$: Observable<Cell[]>;

  constructor(private boardService: BoardService, db: AngularFireDatabase) {
    this.cells$ = db.list<Cell>('cells').valueChanges();
  }

  ngOnInit() {
    this.getCellsByBoard(this.name);
  }

  private getCellsByBoard(name: string){
    this.boardService.getBoardByKey(this.name).cellArray.forEach((cellKey) => {
      this.cells$.pipe(map(items => items.filter(item => item.key === cellKey))).subscribe(cell => this.cellsByBoard.push(cell));
    });
  }
}

