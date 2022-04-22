import {Injectable} from '@angular/core';
import {Board} from '../models/board.model';
import {Cell} from '../models/cell.model';
import {CellService} from './cell.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public boards: Board[] = [
    {
      key: 'home',
      difficulty: 1,
      cellArray: ['yes-no', '4-button', '6-button','8-button'],
    },
    {
      key: 'yes-no',
      difficulty: 1,
      cellArray: ['yes', 'no'],
    },
    {
      key: '4-button',
      difficulty: 2,
      cellArray: ['yes', 'no', 'maybe', 'stop'],
    },
    {
      key: '6-button',
      difficulty: 2,
      cellArray: ['yes', 'no', 'maybe', 'stop','hello','bye'],
    },
    {
      key: '8-button',
      difficulty: 2,
      cellArray: ['yes', 'no', 'maybe', 'stop','sure','ok','hello','bye'],
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
