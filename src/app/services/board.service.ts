import {Injectable} from '@angular/core';
import {Board} from '../models/board.model';
import {Cell} from '../models/cell.model';
import {CellService} from './cell.service';
import {getDatabase, onValue, ref} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public boards: Board[] = [
    {
      key: 'home',
      difficulty: 1,
      title: 'SYMPLE',
      cellArray: ['yes-no', 'core-4', 'core-6','core-8','core-8','core-36'],
    },
    {
      key: 'yes-no',
      difficulty: 1,
      title: 'Yes/No Board',
      cellArray: ['yes', 'no'],
    },
    {
      key: 'core-4',
      difficulty: 2,
      title: '4 Button Board',
      cellArray: ['yes', 'no', 'maybe', 'stop'],
    },
    {
      key: 'core-6',
      difficulty: 2,
      title: '6 Button Board',
      cellArray: ['yes', 'no', 'maybe', 'stop','hello','bye'],
    },
    {
      key: 'core-8',
      difficulty: 2,
      title: '8 Button Board',
      cellArray: ['yes', 'no', 'maybe', 'stop','sure','ok','hello','bye'],
    },
    {
      key: 'core-36',
      difficulty: 5,
      title: 'Core 36 Board',
      cellArray: ['like', 'want', 'get', 'make', 'good', 'more', 'not', 'go', 'look', 'turn', 'help', 'different', 'I', 'he', 'open', 'do', 'put', 'same', 'you', 'she', 'that', 'up', 'all', 'some', 'it', 'here', 'in', 'on', 'can', 'finished', 'where', 'what', 'why', 'who', 'when'],
    },
  ];

  constructor(private cellService: CellService) { }

  public getBoards(): Board[] {
    return this.boards;
  }

  public getBoardByKey(name: string): Board {
    return this.boards.find(i => i.key === name);
  }

  public getCellsByBoard(name: string): Cell[] {
    const boardCells: Cell[] = [];
    this.getBoardByKey(name).cellArray.forEach((cellKey) => {
      boardCells.push(this.cellService.cells.find(i => i.key === cellKey));
    });
    return boardCells;
  }
}
