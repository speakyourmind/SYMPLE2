import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';
import {BoardService} from '../../services/communication/board.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private boardService: BoardService,
    private router: Router
  ) {}

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async register() {
    await this.router.navigateByUrl('/sign-up', {replaceUrl: true});

    //
    //
    //
    // const loading = await this.loadingController.create();
    // await loading.present();
    //
    // const user = await this.authService.register(this.credentials.value);
    // await loading.dismiss();
    //
    // if (user) {
    //   this.router.navigateByUrl('/home/home', { replaceUrl: true });
    // } else {
    //   this.showAlert('Registration failed', 'Please try again!');
    // }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    if (user) {
      await this.router.navigateByUrl('/home', { replaceUrl: true });
      this.boardService.edit=false;
    } else {
      await this.showAlert('Login failed', 'Please try again!');
    }
  }

  async logout(){
    await this.authService.logout();
    await this.router.navigateByUrl('/home', {replaceUrl: true});
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}

