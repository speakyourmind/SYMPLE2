import {Cell} from './cell.model';

export interface Board {
  key: string;
  difficulty: number;
  description: string;
  cellArray: Cell[];
}
