import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Cell} from '../../models/cell.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomePage{
  cells: Cell[];
  cellsArray: Array<any>;

  constructor(private data: DataService) {
  }

  getCells(): Cell[] {
    return this.data.getCells();
  }
}
