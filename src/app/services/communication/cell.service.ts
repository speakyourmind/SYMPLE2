import {Injectable} from '@angular/core';
import {Cell} from '../../models/cell.model';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {BoardService} from './board.service';

@Injectable({
  providedIn: 'root'
})
export class CellService {

  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  getCellByKey(uid: string, key: string): Observable<Cell> {
    return this.db.object<Cell>('users/' + uid + '/cells/' + key).valueChanges();
  }

  async saveDisplayText(uid: string, key: string, value: string) {
    await this.getCellDBRef(uid, key).update({displayText: value});
  }

  async saveBackgroundColor(uid: string, key: string, value: string) {
    await this.getCellDBRef(uid, key).update({backgroundColor: value});
  }

  async saveSpeakable(uid: string, key: string, value: boolean) {
    await this.getCellDBRef(uid, key).update({speakable: value});
  }

  async saveTypeable(uid: string, key: string, value: boolean) {
    await this.getCellDBRef(uid, key).update({typeable: value});
  }

  async saveCell(uid: string, cell: Cell, boardID: string, currentArray: string) {
    await this.getCellDBRef(uid, cell.key).update(cell);
    await this.getBoardDBRef(uid, boardID).update({cellArray: currentArray.concat(',' + cell.key)});
  }

  async deleteCell(uid: string, cell: Cell, boardID: string, currentArray: string) {
    await this.getCellDBRef(uid, cell.key).remove();
    await this.getBoardDBRef(uid, boardID).update({cellArray: currentArray.replace(cell.key, '')});
  }

  public getCellDBRef(uid: string, key: string) {
    return this.db.database.ref('users/' + uid + '/cells/' + key);
  }

  public getBoardDBRef(uid: string, boardID: string) {
    return this.db.database.ref('users/' + uid + '/boards/' + boardID);
  }
}
