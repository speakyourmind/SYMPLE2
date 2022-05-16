import {Injectable} from '@angular/core';
import {Cell} from '../../models/cell.model';
import {Board} from '../../models/board.model';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CellService {

  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  getCellByKey(uid: string, cellKey: string): Observable<Cell> {
    return this.db.object<Cell>(uid + '_cells/' + cellKey).valueChanges();
  }

  async saveDisplayText(uid: string, key: string, value: string){
    await this.db.database.ref(uid + '_cells/' + key).update({displayText: value});
  }

  async saveBackgroundColor(uid: string, key: string, value: string){
    await this.db.database.ref(uid + '_cells/' + key).update({backgroundColor: value});
  }

  async saveSpeakable(uid: string, key: string, value: boolean){
    await this.db.database.ref(uid + '_cells/' + key).update({speakable: value});
  }
}
