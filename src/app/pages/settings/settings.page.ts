import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AuthService} from '../../services/auth/auth.service';
import {CellService} from '../../services/communication/cell.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController} from '@ionic/angular';
import {getAuth, onAuthStateChanged} from '@angular/fire/auth';
import {InteractionService} from '../../services/user/interaction.service';
import {Observable} from 'rxjs';
import {Cell} from '../../models/cell.model';
import {Interaction} from '../../models/interaction.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  interaction: Interaction;
  settings: FormGroup;
  db: AngularFireDatabase;
  auth = getAuth();
  uid: string;

  constructor(private activatedRoute: ActivatedRoute,
              db: AngularFireDatabase,
              private authService: AuthService,
              private interactionService: InteractionService,
              private fb: FormBuilder,
              private loadingController: LoadingController,
              private alertController: AlertController,
              private router: Router,) {
    this.db = db;
  }

  get selectionType() {
    if (this.settings.get('selectionType').value == null) {
      return this.interaction.selectionType ? this.interaction.selectionType : false;
    } else {
      return this.settings.get('selectionType').value;
    }
  }

  async save() {
    await this.interactionService.saveSelectionType(this.uid, this.selectionType.value.toString());
    await this.router.navigateByUrl('/home/home');
  }

  ngOnInit() {
    this.settings = this.fb.group({
      selectionType: [this.interaction?.selectionType]
    });

    onAuthStateChanged(this.auth, (user) => {
      this.uid = (user) ? user.uid : null;
      this.interactionService.getInteraction(this.uid).subscribe((interaction) => {
        this.interaction = interaction;
      });
    });
  }

}
