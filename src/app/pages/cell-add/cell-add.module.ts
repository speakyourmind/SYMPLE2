import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CellAddPageRoutingModule } from './cell-add-routing.module';

import { CellAddPage } from './cell-add.page';
import {AboutPageModule} from '../about/about.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CellAddPageRoutingModule,
    AboutPageModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [CellAddPage]
})
export class CellAddPageModule {}
