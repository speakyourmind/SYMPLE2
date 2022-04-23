import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BoardService} from '../../services/board.service';
import {Board} from '../../models/board.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit{

  public name: string;
  public board: Board;

  constructor(private activatedRoute: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('id');
    this.board = this.boardService.getBoardByKey(this.name);
  }

}
