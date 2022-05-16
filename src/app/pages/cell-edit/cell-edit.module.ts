import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CellEditPageRoutingModule } from './cell-edit-routing.module';

import { CellEditPage } from './cell-edit.page';
import {AboutPageModule} from '../about/about.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CellEditPageRoutingModule,
        AboutPageModule,
        MatButtonModule,
        ReactiveFormsModule,
    ],
  declarations: [CellEditPage]
})
export class CellEditPageModule {}
