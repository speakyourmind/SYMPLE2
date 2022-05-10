import {Injectable} from '@angular/core';
import {Board} from '../models/board.model';
import {Cell} from '../models/cell.model';
import {CellService} from './cell.service';
import {getDatabase, onValue, ref} from '@angular/fire/database';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  db: AngularFireDatabase;
  board: Board;
  edit = false;

  constructor(private cellService: CellService, db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.db = db;
    this.edit = false;
  }

  getCellsByBoard(name: string, uid: string): Observable<Cell>[] {
    const cellsByBoard: Observable<Cell>[] = [];
    this.db.object<Board>(uid + '_boards/' + name).valueChanges().subscribe((value) => {
      this.board = value;
      if (this.board !== null && this.board.cellArray.length > 0) {
      const cells = this.board.cellArray.split(',', 100);
        for (const cellKey of cells) {
          cellsByBoard.push(this.cellService.getCellByKey(uid, cellKey));
        }
      }
    });
    return cellsByBoard;
  }

}
