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
      key: 'core-4',
      backgroundColor: 'blue',
      displayText: '4 BUTTON',
      route: '/home/core-4',
      speakable: false,
    },
    {
      key: 'core-6',
      backgroundColor: 'red',
      displayText: '6 BUTTON',
      route: '/home/core-6',
      speakable: false,
    },
    {
      key: 'core-8',
      backgroundColor: 'orange',
      displayText: '8 BUTTON',
      route: '/home/core-8',
      speakable: false,
    },
    {
      key: 'core-36',
      backgroundColor: 'purple',
      displayText: 'CORE 36',
      route: '/home/core-36',
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
    }, {
      key: 'like',
      backgroundColor: 'green',
      displayText: 'LIKE',
    },
    {
      key: 'want',
      backgroundColor: 'green',
      displayText: 'WANT',
    },
    {
      key: 'get',
      backgroundColor: 'green',
      displayText: 'GET',
    },
    {
      key: 'make',
      backgroundColor: 'green',
      displayText: 'MAKE',
    },
    {
      key: 'good',
      backgroundColor: 'green',
      displayText: 'GOOD',
    },
    {
      key: 'more',
      backgroundColor: 'green',
      displayText: 'MORE',
    },
    {
      key: 'not',
      backgroundColor: 'red',
      displayText: 'NOT',
    },
    {
      key: 'go',
      backgroundColor: 'green',
      displayText: 'GO',
    },
    {
      key: 'look',
      backgroundColor: 'green',
      displayText: 'LOOK',
    },
    {
      key: 'turn',
      backgroundColor: 'green',
      displayText: 'TURN',
    },
    {
      key: 'help',
      backgroundColor: 'green',
      displayText: 'HELP',
    },
    {
      key: 'different',
      backgroundColor: 'green',
      displayText: 'DIFFERENT',
    },
    {
      key: 'I',
      backgroundColor: 'purple',
      displayText: 'I',
    },
    {
      key: 'he',
      backgroundColor: 'purple',
      displayText: 'HE',
    },
    {
      key: 'open',
      backgroundColor: 'green',
      displayText: 'OPEN',
    },
    {
      key: 'do',
      backgroundColor: 'green',
      displayText: 'DO',
    },
    {
      key: 'put',
      backgroundColor: 'green',
      displayText: 'PUT',
    },
    {
      key: 'same',
      backgroundColor: 'green',
      displayText: 'SAME',
    },
    {
      key: 'you',
      backgroundColor: 'purple',
      displayText: 'YOU',
    },
    {
      key: 'she',
      backgroundColor: 'purple',
      displayText: 'SHE',
    },
    {
      key: 'that',
      backgroundColor: 'purple',
      displayText: 'THAT',
    },
    {
      key: 'up',
      backgroundColor: 'blue',
      displayText: 'UP',
    },
    {
      key: 'all',
      backgroundColor: 'green',
      displayText: 'ALL',
    },
    {
      key: 'some',
      backgroundColor: 'green',
      displayText: 'SOME',
    },
    {
      key: 'it',
      backgroundColor: 'purple',
      displayText: 'IT',
    },
    {
      key: 'here',
      backgroundColor: 'green',
      displayText: 'HERE',
    },
    {
      key: 'in',
      backgroundColor: 'blue',
      displayText: 'IN',
    },
    {
      key: 'on',
      backgroundColor: 'blue',
      displayText: 'ON',
    },
    {
      key: 'can',
      backgroundColor: 'green',
      displayText: 'CAN',
    },
    {
      key: 'finished',
      backgroundColor: 'red',
      displayText: 'FINISHED',
    },
    {
      key: 'where',
      backgroundColor: 'orange',
      displayText: 'WHERE',
    },
    {
      key: 'what',
      backgroundColor: 'orange',
      displayText: 'WHAT',
    },
    {
      key: 'why',
      backgroundColor: 'orange',
      displayText: 'WHY',
    },
    {
      key: 'who',
      backgroundColor: 'orange',
      displayText: 'WHO',
    },
    {
      key: 'when',
      backgroundColor: 'orange',
      displayText: 'WHEN',
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
