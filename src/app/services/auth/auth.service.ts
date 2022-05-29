import {Injectable} from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import {UserService} from './user.service';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {Cell} from '../../models/cell.model';
import {Board} from '../../models/board.model';
import {Interaction} from '../../models/interaction.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  db: AngularFireDatabase;
  uid: string;
  defaultBoardData;
  public defaultCells: Cell[] = [
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


  public defaultBoards: Board[] = [
    {
      key: 'home',
      difficulty: 1,
      title: 'SYMPLE',
      cellArray: 'yes-no,core-4,core-6,core-8,core-8,core-36',
    },
    {
      key: 'yes-no',
      difficulty: 1,
      title: 'Yes/No Board',
      cellArray: 'yes,no',
    },
    {
      key: 'core-4',
      difficulty: 2,
      title: '4 Button Board',
      cellArray: 'yes,no,maybe,stop',
    },
    {
      key: 'core-6',
      difficulty: 2,
      title: '6 Button Board',
      cellArray: 'yes,no,maybe,stop,hello,bye',
    },
    {
      key: 'core-8',
      difficulty: 2,
      title: '8 Button Board',
      cellArray: 'yes,no,maybe,stop,sure,ok,hello,bye',
    },
    {
      key: 'core-36',
      difficulty: 5,
      title: 'Core 36 Board',
      cellArray: 'like,want,get,make,good,more,not,go,look,turn,help,different,I,he,open,do,put,same,you,she,that,up,all,some,it,here,in,on,can,finished,where,what,why,who,when',
    },
  ];

  public defaultSettings: Interaction[] = [
    {
      selectionType: 'click',
    },
  ];


  constructor(db: AngularFireDatabase, private auth: Auth, private userService: UserService) {
    this.db = db;
  }

  async register({email, password}) {
    try {
      const userAuth = await createUserWithEmailAndPassword(this.auth, email, password);
      this.uid = userAuth.user.uid;

      this.defaultCells.forEach((defaultCell) => {
        const cells = this.db.database.ref().child('users/' + this.uid + '/cells');
        cells.child(defaultCell.key).set({
          key: defaultCell.key,
          backgroundColor: defaultCell.backgroundColor,
          displayText: defaultCell.displayText,
          route: defaultCell.route != null ? defaultCell.route : ''
        });
      });

      this.defaultBoards.forEach((defaultBoard) => {
        const cells = this.db.database.ref().child('users/' + this.uid + '/boards');
        cells.child(defaultBoard.key).set({
          key: defaultBoard.key,
          difficulty: defaultBoard.difficulty,
          title: defaultBoard.title,
          cellArray: defaultBoard.cellArray
        });
      });

      this.defaultSettings.forEach((defaultSetting) => {
        const setting = this.db.database.ref().child('users/' + this.uid + '/settings');
        setting.child('interaction').set({
          key: defaultSetting.selectionType,
        });
      });
      return userAuth;
    } catch (e) {
      return null;
    }
  }

  async login({email, password}) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      this.uid = user.user.uid;
      this.userService.setLoggedIn(true);

      return user;
    } catch (e) {
      this.userService.setLoggedIn(false);
      return null;
    }
  }

  async logout() {
    this.userService.setLoggedIn(false);
    return signOut(this.auth);
  }
}
