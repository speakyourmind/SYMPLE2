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

  async saveLevel(uid: string, value: number) {
    await this.getInteractionDBRef(uid).update({level: value});
  }

  async saveSelectionType(uid: string, value: string) {
    await this.getInteractionDBRef(uid).update({selectionType: value});
  }

  async saveDwellTime(uid: string, value: number) {
    await this.getInteractionDBRef(uid).update({dwellTime: value});
  }

  getInteraction(uid: string): Observable<Interaction> {
    return this.getInteractionDBRef(uid).valueChanges();
  }

  private getInteractionDBRef(uid: string) {
    return this.db.object<Interaction>('users/' + uid + '/settings/interaction');
  }
}
