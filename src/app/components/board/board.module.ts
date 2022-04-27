import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {BoardComponent} from './board.component';
import {CellComponentModule} from '../cell/cell.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, CellComponentModule, MatButtonModule,],
  declarations: [BoardComponent],
  exports: [BoardComponent]
})

export class BoardComponentModule {}
