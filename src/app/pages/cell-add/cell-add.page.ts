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
import {Location} from '@angular/common';

@Component({
  selector: 'app-cell-add',
  templateUrl: './cell-add.page.html',
  styleUrls: ['./cell-add.page.scss'],
})
export class CellAddPage implements OnInit {
  public name: string;

  settings: FormGroup;
 currentArray: string;
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
    return this.settings.get('displayText').value;
  }

  get backgroundColor() {
    return this.settings.get('backgroundColor').value;
  }

  get speakable() {
    return this.settings.get('speakable').value;
  }

  loadBackgroundColor() {
    if (this.backgroundColor == null) {
      return 'light';
    } else {
      return this.backgroundColor;
    }
  }

  async save() {
    const cell: Cell = {
      key: this.displayText.toLowerCase(),
      displayText: this.displayText,
      backgroundColor: this.backgroundColor,
      speakable: this.speakable,
    };

    await this.cellService.saveCell(this.uid, cell, this.name, this.currentArray);
    await this.location.back();
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('boardid');

    this.settings = this.fb.group({
      displayText: '',
      backgroundColor: '',
      speakable: false,
    });

    onAuthStateChanged(this.auth, (user) => {
      this.uid = (user) ? user.uid : null;

      this.db.object<Board>('users/' + this.uid + '/boards/' + this.name).valueChanges().subscribe((value) => {
        this.currentArray = value.cellArray;
      });
    });

  }
}
