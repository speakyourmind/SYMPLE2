import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {TextToSpeech} from '@capacitor-community/text-to-speech';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() cell: Observable<any>;
  @Input() label: string;
  @Input() color: string;

  constructor() {
  }

  ngOnInit() {

  }

  onClick() {
    speak(this.label);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}


const speak = async (label: string) => {
  await TextToSpeech.speak({
    text: label,
    lang: 'en-US',
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
    category: 'ambient',
  });
};

const stop = async () => {
  await TextToSpeech.stop();
};

const getSupportedLanguages = async () => {
  const languages = await TextToSpeech.getSupportedLanguages();
};

const getSupportedVoices = async () => {
  const voices = await TextToSpeech.getSupportedVoices();
};

const isLanguageSupported = async (lang: string) => {
  const isSupported = await TextToSpeech.isLanguageSupported({lang});
};
