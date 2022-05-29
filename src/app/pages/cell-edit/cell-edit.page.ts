import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Cell} from '../../models/cell.model';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AuthService} from '../../services/auth/auth.service';
import {getAuth, onAuthStateChanged} from '@angular/fire/auth';
import {CellService} from '../../services/communication/cell.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AlertController, LoadingController} from '@ionic/angular';
import {Location} from '@angular/common';
import {Board} from '../../models/board.model';

@Component({
  selector: 'app-cell-edit',
  templateUrl: './cell-edit.page.html',
  styleUrls: ['./cell-edit.page.scss'],
})
export class CellEditPage implements OnInit {
  cellId: string;
  boardId: string;
  currentArray: string;

  settings: FormGroup;

  cellObservable: Observable<Cell>;
  cell: Cell;
  db: AngularFireDatabase;
  auth = getAuth();
  uid: string;

  constructor(private activatedRoute: ActivatedRoute,
              db: AngularFireDatabase,
              private authService: AuthService,
              private cellService: CellService,
              private fb: FormBuilder,
              private loadingController: LoadingController,
              private alertController: AlertController,
              private router: Router,
              private location: Location) {
    this.db = db;
  }

  // Easy access for form fields
  get displayText() {
    if(this.settings.get('displayText').value == null){
      return this.cell?.displayText ? this.cell?.displayText : '';
    } else {
      return this.settings.get('displayText').value;
    }
  }

  get backgroundColor() {
    return this.settings.get('backgroundColor');
  }

  get speakable() {
    if(this.settings.get('speakable').value == null){
      return this.cell?.speakable ? this.cell?.speakable : false;
    } else {
      return this.settings.get('speakable').value;
    }
  }

  loadBackgroundColor() {
    if (this.backgroundColor.value == null) {
      return this.cell?.backgroundColor;
    } else {
      return this.backgroundColor.value;
    }
  }

  async save() {
    await this.cellService.saveDisplayText(this.uid, this.cell.key, this.displayText.toString());
    await this.cellService.saveBackgroundColor(this.uid, this.cell.key, this.backgroundColor.value.toString());
    await this.cellService.saveSpeakable(this.uid, this.cell.key, this.speakable);
    this.location.back();
  }

  delete() {
    this.cellService.deleteCell(this.uid, this.cell, this.boardId, this.currentArray);
    this.router.navigateByUrl('/home/home');
  }

  ngOnInit() {
    this.cellId = this.activatedRoute.snapshot.paramMap.get('cellid');
    this.boardId = this.activatedRoute.snapshot.paramMap.get('boardid');

    this.settings = this.fb.group({
      displayText: [this.cell?.displayText],
      backgroundColor: [this.cell?.backgroundColor],
      speakable: [this.cell?.speakable],
    });

    onAuthStateChanged(this.auth, (user) => {
      this.uid = (user) ? user.uid : null;
      this.cellObservable = this.cellService.getCellByKey(this.uid, this.cellId);
      this.cellObservable.subscribe((cell) => {
        this.cell = cell;
      });

      this.db.object<Board>('users/' + this.uid + '/boards/' + this.boardId).valueChanges().subscribe((value) => {
        this.currentArray = value.cellArray;
      });
    });

  }
}
