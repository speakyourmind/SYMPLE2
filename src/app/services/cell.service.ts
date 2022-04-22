import {Injectable} from '@angular/core';
import {Cell} from '../models/cell.model';
import {Board} from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class CellService {


  public cells: Cell[] = [
    {
      key: 'home',
      backgroundColor: 'success',
      displayText: 'HOME',
      route: '/home/home',
      speakable: false,
    },
    {
      key: 'yes-no',
      backgroundColor: 'success',
      displayText: 'YES/NO',
      route: '/home/yes-no',
      speakable: false,
    },
    {
      key: '4-button',
      backgroundColor: 'danger',
      displayText: '4-BUTTON',
      route: '/home/4-button',
      speakable: false,
    },
    {
      key: '6-button',
      backgroundColor: 'primary',
      displayText: '6-BUTTON',
      route: '/home/6-button',
      speakable: false,
    },
    {
      key: '8-button',
      backgroundColor: 'warning',
      displayText: '8-BUTTON',
      route: '/home/8-button',
      speakable: false,
    },
    {
      key: 'yes',
      backgroundColor: 'success',
      displayText: 'YES',
    },
    {
      key: 'no',
      backgroundColor: 'danger',
      displayText: 'NO',
    },
    {
      key: 'maybe',
      backgroundColor: 'warning',
      displayText: 'MAYBE',
    },
    {
      key: 'stop',
      backgroundColor: 'danger',
      displayText: 'STOP',
    },
    {
      key: 'sure',
      backgroundColor: 'primary',
      displayText: 'SURE',
    },
    {
      key: 'ok',
      backgroundColor: 'purple',
      displayText: 'OK',
    },
    {
      key: 'hello',
      backgroundColor: 'primary',
      displayText: 'HELLO',
    },
    {
      key: 'bye',
      backgroundColor: 'warning',
      displayText: 'BYE',
    },
  ];


  constructor() {
  }

  public getCells(): Cell[] {
    return this.cells;
  }

  public getCellById(id: number): Cell {
    return this.cells[id];
  }

}
