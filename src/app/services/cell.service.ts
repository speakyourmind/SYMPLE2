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
      backgroundColor: 'blue',
      displayText: 'HOME',
      route: '/home/home',
      speakable: false,
    },
    {
      key: 'yes-no',
      backgroundColor: 'green',
      displayText: 'YES/NO',
      route: '/home/yes-no',
      speakable: false,
    },
    {
      key: '4-button',
      backgroundColor: 'blue',
      displayText: '4-BUTTON',
      route: '/home/4-button',
      speakable: false,
    },
    {
      key: '6-button',
      backgroundColor: 'red',
      displayText: '6-BUTTON',
      route: '/home/6-button',
      speakable: false,
    },
    {
      key: '8-button',
      backgroundColor: 'orange',
      displayText: '8-BUTTON',
      route: '/home/8-button',
      speakable: false,
    },
    {
      key: 'yes',
      backgroundColor: 'green',
      displayText: 'YES',
    },
    {
      key: 'no',
      backgroundColor: 'red',
      displayText: 'NO',
    },
    {
      key: 'maybe',
      backgroundColor: 'orange',
      displayText: 'MAYBE',
    },
    {
      key: 'stop',
      backgroundColor: 'red',
      displayText: 'STOP',
    },
    {
      key: 'sure',
      backgroundColor: 'blue',
      displayText: 'SURE',
    },
    {
      key: 'ok',
      backgroundColor: 'purple',
      displayText: 'OK',
    },
    {
      key: 'hello',
      backgroundColor: 'green',
      displayText: 'HELLO',
    },
    {
      key: 'bye',
      backgroundColor: 'orange',
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
