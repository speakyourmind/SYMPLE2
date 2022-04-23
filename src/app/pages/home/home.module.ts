import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.component';
import {BoardComponentModule} from '../../components/board/board.module';
import {AboutPageModule} from '../about/about.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BoardComponentModule,
    AboutPageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {
}
