import {Injectable} from '@angular/core';
import {Board} from '../models/board.model';
import {Cell} from '../models/cell.model';
import {CellService} from './cell.service';
import {getDatabase, onValue, ref} from '@angular/fire/database';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  db: AngularFireDatabase;
  board: Board;

  constructor(private cellService: CellService, db: AngularFireDatabase) {
    this.db = db;
  }

  getCellsByBoard(name: string): Cell[] {
    const cellsByBoard: Cell[] = [];
    this.db.object<Board>('boards/' + name).valueChanges().subscribe((value) => {
      this.board = value;
      const cells = this.board.cellArray.split(',', 100);
      for (const cellKey of cells) {
        this.db.object<Cell>('cells/' + cellKey).valueChanges().subscribe(cell => cellsByBoard.push(cell));
      }
    });
    return cellsByBoard;
  }
}
