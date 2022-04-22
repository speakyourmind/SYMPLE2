import {Component, Input, OnInit} from '@angular/core';
import {Cell} from '../../models/cell.model';
import {BoardService} from '../../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() name: string;

  cellsByBoard: Cell[];
  cellGroups: Cell[][];
  cellsPerRow = 2;
  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.cellsByBoard = this.boardService.getCellsByBoard(this.name);
    this.cellGroups = this.getCellGroups();
  }

  getCells(): Cell[] {
    return this.boardService.getCellsByBoard(this.name);
  }

  getCellGroups(): Cell[][] {
    const groupArray: Cell[][] = [];
    let i = 0;
    while (i < this.cellsByBoard.length) {
      groupArray.push(this.cellsByBoard.slice(i, i + this.cellsPerRow));
      i = i + this.cellsPerRow;
    }
    return groupArray;
  }
}

