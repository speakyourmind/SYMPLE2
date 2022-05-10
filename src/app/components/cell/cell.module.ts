import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {CellComponent} from './cell.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, MatButtonModule, MatIconModule],
  declarations: [CellComponent],
  exports: [CellComponent]
})

export class CellComponentModule {

}
