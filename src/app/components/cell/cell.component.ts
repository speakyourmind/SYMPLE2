import {Component, OnInit, Input, HostListener, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {TextToSpeech} from '@capacitor-community/text-to-speech';
import {Cell} from '../../models/cell.model';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Animation, AnimationController } from '@ionic/angular';
import {BoardService} from '../../services/communication/board.service';
import {InteractionService} from '../../services/user/interaction.service';
import {getAuth, onAuthStateChanged} from '@angular/fire/auth';
import {Interaction} from '../../models/interaction.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() cellObservable: Observable<Cell>;
  @Input() fontVW = '2vw';
  @ViewChild('cellButton') cellButton: any;

  boardId: string;
  interactionObservable: Observable<Interaction>;
  interaction: Interaction;
  cell: Cell;
  db: AngularFireDatabase;
  animation: Animation;
  auth = getAuth();
  uid: string;

  constructor(private activatedRoute: ActivatedRoute,
              db: AngularFireDatabase,
              private animationCtrl: AnimationController,
              private boardService: BoardService,
              private interactionService: InteractionService,
              private router: Router,) {
    this.db = db;
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.interaction.selectionType === 'dwell') {
      this.animation = this.animationCtrl.create()
        .addElement(document.getElementById('cellButton_' + this.cell.key))
        .fill('none')
        .duration(2400)
        .onFinish(() => {
          this.execute();
        })
        .keyframes([
          {offset: 0.0, transform: 'scale(1)'},
          {offset: 0.2, transform: 'scale(1)'},
          {offset: 1.0, transform: 'scale(1.2)'}
        ]);
      this.animation.play();
    }
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    if(this.animation?.isRunning()){
    this.animation.stop();
    this.animation.destroy();
    }
  }

  ngOnInit() {
    this.boardId = this.activatedRoute.snapshot.paramMap.get('boardid');
    this.cellObservable.subscribe((cell) => {
      this.cell = cell;
    });

    onAuthStateChanged(this.auth, (user) => {
      this.uid = (user) ? user.uid : null;
      this.interactionObservable = this.interactionService.getInteraction(this.uid);
      this.interactionObservable.subscribe((interaction) => {
        this.interaction = interaction;
      });
    });
  }

  onClick() {
    if (this.interaction.selectionType === 'click') {
      this.execute();
    }
  }

  execute(){
    if (this.cell.speakable == null || this.cell.speakable) {
      speak(this.cell.displayText.toLowerCase());
    }
    if (this.cell?.route) {
      this.router.navigateByUrl(this.cell.route);
    }
  }


  inEdit(): boolean{
    return this.boardService.edit;
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

