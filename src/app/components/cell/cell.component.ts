import {Component, OnInit, Input, HostListener, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {TextToSpeech} from '@capacitor-community/text-to-speech';
import {Cell} from '../../models/cell.model';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Animation, AnimationController } from '@ionic/angular';
import {BoardService} from '../../services/board.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() cellObservable: Observable<Cell>;
  @Input() fontVW = '2vw';
  @ViewChild('cellButton') cellButton: any;

  cell: Cell;
  db: AngularFireDatabase;
  animation: Animation;

  constructor(db: AngularFireDatabase, private animationCtrl: AnimationController, private boardService: BoardService) {
    this.db = db;
  }
  ngOnInit() {
    this.cellObservable.subscribe((cell) => {
      this.cell = cell;
    });
  }

  onClick() {
    if (this.cell.speakable == null || this.cell.speakable) {
      speak(this.cell.displayText.toLowerCase());
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    // this.animation = this.animationCtrl.create()
    //   .addElement(document.getElementById('cellButton_'+this.cell.key))
    //   .fill('none')
    //   .duration(1000)
    //   .keyframes([
    //     { offset: 0, transform: 'scale(1)' },
    //     { offset: 1, transform: 'scale(1.2)' }
    //   ]);
  //  this.animation.play();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
  //  this.highlight=null;
    //this.animation.stop();
  }

  inEdit(): boolean{
    return this.boardService.edit;
  }

  deleteCell(){
    const itemsRef = this.db.database.ref('default_cells/yes');
    itemsRef.remove().then();
  }

  getRouterLink(): string {
    return this.cell?.route ? this.cell.route : null;
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

