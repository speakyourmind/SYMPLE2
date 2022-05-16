import {Component, Input, OnInit} from '@angular/core';
import {Board} from '../../models/board.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Cell} from '../../models/cell.model';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AuthService} from '../../services/auth/auth.service';
import {getAuth, onAuthStateChanged} from '@angular/fire/auth';
import {CellService} from '../../services/communication/cell.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-cell-edit',
  templateUrl: './cell-edit.page.html',
  styleUrls: ['./cell-edit.page.scss'],
})
export class CellEditPage implements OnInit {
  public name: string;

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
              private router: Router,) {
    this.db = db;
  }

  // Easy access for form fields
  get displayText() {
    if(this.settings.get('displayText').value == null){
      return this.cell?.displayText;
    } else {
      return this.settings.get('displayText').value;
    }
  }

  get backgroundColor() {
    return this.settings.get('backgroundColor');
  }

  get speakable() {
    if(this.settings.get('speakable').value == null){
      return this.cell?.speakable;
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
    await this.cellService.saveDisplayText(this.uid, this.cell?.key, this.displayText.toString());
    await this.cellService.saveBackgroundColor(this.uid, this.cell?.key, this.backgroundColor.value.toString());
    await this.cellService.saveSpeakable(this.uid, this.cell?.key, this.speakable);
    await this.router.navigateByUrl('/home/home');
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('cellid');

    this.settings = this.fb.group({
      displayText: [this.cell?.displayText],
      backgroundColor: [this.cell?.backgroundColor],
      speakable: [this.cell?.speakable],
    });

    onAuthStateChanged(this.auth, (user) => {
      this.uid = (user) ? user.uid : null;
      this.cellObservable = this.cellService.getCellByKey(this.uid, this.name);
      this.cellObservable.subscribe((cell) => {
        this.cell = cell;
      });
    });

  }
}
