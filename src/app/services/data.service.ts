import { Injectable } from '@angular/core';
import {Cell} from '../models/cell.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public cells: Cell[] = [
    {
      id: 'yes',
      backgroundColor:'success',
      displayText: 'YES',
    },
    {
      id: 'no',
      backgroundColor:'danger',
      displayText: 'NO',
    },
    {
      id: 'maybe',
      backgroundColor:'warning',
      displayText: 'MAYBE',
    },
    {
      id: 'stop',
      backgroundColor:'danger',
      displayText: 'STOP',
    },
  ];

  constructor() { }

  public getCells(): Cell[] {
    return this.cells;
  }

  public getCellById(id: number): Cell {
    return this.cells[id];
  }
}
