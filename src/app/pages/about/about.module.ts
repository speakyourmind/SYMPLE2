import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutPageRoutingModule,
        MatIconModule,

    ],
  exports: [
    NavbarComponent
  ],
  declarations: [AboutPage, NavbarComponent]
})
export class AboutPageModule {}
