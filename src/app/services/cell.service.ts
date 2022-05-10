import {Injectable} from '@angular/core';
import {Cell} from '../models/cell.model';
import {Board} from '../models/board.model';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CellService {

  db: AngularFireDatabase;
  public cells: Cell[] = [];

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  public getCells(): Cell[] {
    return this.cells;
  }

  public getCellById(id: number): Cell {
    return this.cells[id];
  }

  getCellByKey(uid: string, cellKey: string): Observable<Cell> {
    return this.db.object<Cell>(uid + '_cells/' + cellKey).valueChanges();
  }
}
