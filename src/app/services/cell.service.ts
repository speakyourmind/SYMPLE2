import {Injectable} from '@angular/core';
import {Cell} from '../models/cell.model';
import {Board} from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class CellService {


  public cells: Cell[] = [];


  constructor() {
  }

  public getCells(): Cell[] {
    return this.cells;
  }

  public getCellById(id: number): Cell {
    return this.cells[id];
  }

}
