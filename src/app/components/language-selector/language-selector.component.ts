import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILanguage } from './models/language';
import { StaticFiles } from 'src/app/staticFIles';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {
  @Input() languages: ILanguage[] = StaticFiles.languages

  constructor(public languageService: LanguageService){}
  
  onLanguageChange() {
    for (let i = 0; i < this.languages.length; i++) {
      if (this.languageService.selectedLanguage().id == this.languages[i].id) {
        if (i <= this.languages.length - 2){
          this.languageService.changeLanguage(this.languages[i + 1])
        }
        else{
          this.languageService.changeLanguage(this.languages[0])
        }
        break
      }
    }
  }
}
