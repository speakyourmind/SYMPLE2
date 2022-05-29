import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {Observable} from 'rxjs';
import {Interaction} from '../../models/interaction.model';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  getInteraction(uid: string): Observable<Interaction> {
    return this.db.object<Interaction>('users/' + uid + '/settings/interaction').valueChanges();
  }

  async saveLevel(uid: string, value: number) {
    await this.db.database.ref('users/' + uid + '/settings/interaction').update({level: value});
  }

  async saveSelectionType(uid: string, value: string) {
    await this.db.database.ref('users/' + uid + '/settings/interaction').update({selectionType: value});
  }

  async saveDwellTime(uid: string, value: number) {
    await this.db.database.ref('users/' + uid + '/settings/interaction').update({dwellTime: value});
  }
}
