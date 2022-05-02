import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BoardService} from '../../services/board.service';
import {Board} from '../../models/board.model';
import {TextToSpeech} from '@capacitor-community/text-to-speech';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  public name: string;
  public board: Board;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('id');
  }
}

const getSupportedLanguages = async () => {
  const languages = await TextToSpeech.getSupportedLanguages();
};

const getSupportedVoices = async () => {
  const voices = await TextToSpeech.getSupportedVoices();
};

const isLanguageSupported = async (lang: string) => {
  const isSupported = await TextToSpeech.isLanguageSupported({lang});
};
