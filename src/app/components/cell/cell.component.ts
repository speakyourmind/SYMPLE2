import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {TextToSpeech} from '@capacitor-community/text-to-speech';
import {Cell} from '../../models/cell.model';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit{
  @Input() cellObservable: Observable<Cell>;
  @Input() fontVW = '2vw';
  cell: Cell;
  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  ngOnInit() {
    this.cellObservable.subscribe((cell) => {this.cell = cell;});
  }

  onClick() {
    if (this.cell.speakable == null || this.cell.speakable) {
      speak(this.cell.displayText.toLowerCase());
    }
    //
    // const itemsRef = this.db.database.ref('default_cells/'+this.cell.key);
    // itemsRef.update({backgroundColor:'green'});
    //itemsRef.update({displayText:'YES'});

  }

  getRouterLink(): string {
    return this.cell.route ? this.cell.route : null;
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}


const speak = async (label: string) => {
  await TextToSpeech.speak({
    text: label,
    lang: 'en-US',
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
    category: 'ambient',
  });
};

const stop = async () => {
  await TextToSpeech.stop();
};

