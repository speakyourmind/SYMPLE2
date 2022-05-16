import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CellEditPage } from './cell-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CellEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CellEditPageRoutingModule {}
